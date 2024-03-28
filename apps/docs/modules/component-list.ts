import { defineNuxtModule, addTemplate, addServerHandler, createResolver } from '@nuxt/kit'

import { existsSync, readFileSync } from 'fs'
import { dirname, join } from 'pathe'
import fsp from 'fs/promises'

export default defineNuxtModule({
  meta: {
    name: 'component-list',
  },
  async setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    let _configResolved: any
    let components: Record<string, any>
    const outputPath = join(nuxt.options.buildDir, 'component-list')

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
        if (components[component]) {
          component = components[component]
        } else {
          component = Object.entries(components).find(([, comp]: any) => comp.filePath === component)
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
        ? script
            .match(/import[^]*?from[^]*?['"]([^'"]+)['"]/gm)
            ?.map((dependency) => {
              return dependency.split('from')[1].trim().replace(/['";]/g, '')
            })
            .filter((v) => !v.startsWith('.') && !v.startsWith('~') && v !== 'vue' && v !== 'nuxt')
        : undefined

      const composableDependencies = script
        ? script
            .match(/use[a-zA-z]*?\(/gm)
            ?.map((dependency) => {
              return dependency.trim().replace(/['"();]/g, '')
            })
            .filter((v) => !v.startsWith('.') && !v.startsWith('~') && v !== 'vue' && v !== 'nuxt')
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

      components[component.pascalName] = {
        code,
        uiDependencies,
        dependencies,
        composableDependencies,
        shortPath: component.shortPath,
        pascalName: component.pascalName,
      }
    }
    const getStringifiedComponents = () => JSON.stringify(components, null, 2)

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
      await Promise.all(Object.keys(components).map(fetchComponent))

      const acc: Record<string, any> = {}
      Object.values(components).forEach((component) => {
        const name = component.pascalName.split(/(?=[A-Z])/)[1].toLowerCase()
        if (acc[name]) {
          acc[name].push(component)
        } else {
          acc[name] = [component]
        }
      })
      components = acc
    }

    nuxt.hook('components:extend', async (_components) => {
      components = _components
        .filter((v) => v.shortPath.includes('components/ui/'))
        .reduce((acc, component) => {
          acc[component.pascalName] = component
          return acc
        }, {})
      await stubOutput()
    })

    addTemplate({
      filename: 'component-list.mjs',
      getContents: () => 'export default {}',
      write: true,
    })

    nuxt.hook('vite:extend', (vite: any) => {
      vite.config.plugins = vite.config.plugins || []
      vite.config.plugins.push({
        name: 'component-list',
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
          if (Object.entries(components).some(([, comp]: any) => comp.filePath === file)) {
            await fetchComponent(file)
            await updateOutput()
          }
        },
      })
    })

    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.virtual = nitroConfig.virtual || {}
      nitroConfig.virtual['#component-list/nitro'] = () =>
        readFileSync(join(nuxt.options.buildDir, '/component-list.mjs'), 'utf-8')
    })

    addServerHandler({
      method: 'get',
      route: '/api/component-list/:component?',
      handler: resolver.resolve('../server/api/component-list.get'),
    })
  },
})
