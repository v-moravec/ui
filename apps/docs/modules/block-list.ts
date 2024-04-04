import { defineNuxtModule, addTemplate, addServerHandler, createResolver } from '@nuxt/kit'

import { existsSync, readFileSync } from 'fs'
import { dirname, join } from 'pathe'
import fsp from 'fs/promises'

export default defineNuxtModule({
  meta: {
    name: 'block-list',
  },
  async setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    let _configResolved: any
    let blocks: Record<string, any>
    const outputPath = join(nuxt.options.buildDir, 'block-list')

    async function stubOutput() {
      if (existsSync(outputPath + '.mjs')) {
        return
      }
      await updateOutput('export default {}')
    }

    function removeDuplicates(arr?: string[]) {
      if (!arr) {
        return undefined
      }
      return arr.filter((v, i) => arr.indexOf(v) === i)
    }

    async function fetchComponent(component: string | any) {
      if (typeof component === 'string') {
        if (blocks[component]) {
          component = blocks[component]
        } else {
          component = Object.entries(blocks).find(([, comp]: any) => comp.filePath === component)
          if (!component) {
            return
          }

          component = component[1]
        }
      }

      if (!component?.shortPath || !component?.pascalName) {
        return
      }
      const code = await fsp.readFile(component.shortPath, 'utf-8')

      const script = code.match(/<script[^]*?<\/script>/ms)?.[0]
      const template = code.match(/<template[^]*?<\/template>/ms)?.[0]

      const dependencies = script
        ? removeDuplicates(
            script
              .match(/import[^]*?from[^]*?['"]([^'"]+)['"]/gm)
              ?.map((dependency) => {
                return dependency.split('from')[1].trim().replace(/['";]/g, '')
              })
              .filter((v) => !v.startsWith('.') && !v.startsWith('~') && v !== 'vue' && v !== 'nuxt')
          )
        : undefined

      const composableDependencies = script
        ? removeDuplicates(
            script
              .match(/use[a-zA-z]*?\(/gm)
              ?.map((dependency) => {
                return dependency.trim().replace(/['"();]/g, '')
              })
              .filter((v) => !v.startsWith('.') && !v.startsWith('~') && v !== 'vue' && v !== 'nuxt')
          )
        : undefined

      const uiDependencies = template
        ? removeDuplicates(
            template.match(/<Ui[^>]+>/gm)?.map((v) =>
              v
                .slice(1, -1)
                .split(' ')[0]
                .trim()
                .split(/(?=[A-Z])/)[1]
                .toLowerCase()
            )
          )
        : undefined

      blocks[component.pascalName] = {
        code,
        uiDependencies,
        dependencies,
        composableDependencies,
        shortPath: component.shortPath,
        pascalName: component.pascalName,
      }
    }
    const getStringifiedComponents = () => JSON.stringify(blocks, null, 2)

    const getVirtualModuleContent = () => `export default ${getStringifiedComponents()}`

    async function updateOutput(content?: string) {
      const path = outputPath + '.mjs'
      if (!existsSync(dirname(path))) {
        await fsp.mkdir(dirname(path), { recursive: true })
      }
      if (existsSync(path)) {
        await fsp.unlink(path)
      }
      await fsp.writeFile(path, content || getVirtualModuleContent(), 'utf-8')
    }

    async function fetchComponents() {
      await Promise.all(Object.keys(blocks).map(fetchComponent))

      const acc: Record<string, any> = {}
      Object.values(blocks).forEach((component) => {
        const name = component.pascalName.split(/(?=[A-Z])/)[1].toLowerCase()
        if (acc[name]) {
          acc[name].push(component)
        } else {
          acc[name] = [component]
        }
      })
      blocks = acc
    }

    nuxt.hook('components:extend', async (_components) => {
      blocks = _components
        .filter((v) => v.shortPath.includes('components/block/'))
        .reduce((acc, component) => {
          acc[component.pascalName] = component
          return acc
        }, {})
      await stubOutput()
    })

    addTemplate({
      filename: 'block-list.mjs',
      getContents: () => 'export default {}',
      write: true,
    })

    nuxt.hook('vite:extend', (vite: any) => {
      vite.config.plugins = vite.config.plugins || []
      vite.config.plugins.push({
        name: 'block-list',
        enforce: 'post',
        async buildStart() {
          if (_configResolved?.build.ssr) {
            return
          }
          await fetchComponents()
          await updateOutput()
        },
        configResolved(config) {
          _configResolved = config
        },
        async handleHotUpdate({ file }) {
          if (Object.entries(blocks).some(([, comp]: any) => comp.filePath === file)) {
            await fetchComponent(file)
            await updateOutput()
          }
        },
      })
    })

    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.virtual = nitroConfig.virtual || {}
      nitroConfig.virtual['#block-list/nitro'] = () =>
        readFileSync(join(nuxt.options.buildDir, '/block-list.mjs'), 'utf-8')
    })

    addServerHandler({
      method: 'get',
      route: '/api/block-list/:component?',
      handler: resolver.resolve('../server/api/block-list.get'),
    })
  },
})
