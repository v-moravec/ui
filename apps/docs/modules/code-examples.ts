import { defineNuxtModule, addTemplate, addServerHandler, createResolver } from '@nuxt/kit'

import { existsSync, readFileSync } from 'fs'
import { dirname, join } from 'pathe'
import fsp from 'fs/promises'

export default defineNuxtModule({
  meta: {
    name: 'code-examples',
  },
  async setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    let _configResolved: any
    let components: Record<string, any>
    const outputPath = join(nuxt.options.buildDir, 'code-examples')

    async function stubOutput() {
      if (existsSync(outputPath + '.mjs')) {
        return
      }
      await updateOutput('export default {}')
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

      function removeDuplicates(arr?: string[]) {
        if (!arr) {
          return undefined
        }
        return arr.filter((v, i) => arr.indexOf(v) === i)
      }

      const template = code.match(/<template[^]*?<\/template>/ms)?.[0]

      const dependencies = template
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
        dependencies: dependencies,
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
    }

    nuxt.hook('components:extend', async (_components) => {
      components = _components
        .filter(
          (v) =>
            v.shortPath.includes('components/content/examples/') ||
            v.shortPath.includes('components/block/') ||
            v.shortPath.includes('components/ui/') ||
            v.shortPath.includes('components/content/blocks/')
        )
        .reduce((acc, component) => {
          acc[component.pascalName] = component
          return acc
        }, {})
      await stubOutput()
    })

    addTemplate({
      filename: 'code-examples.mjs',
      getContents: () => 'export default {}',
      write: true,
    })

    nuxt.hook('vite:extend', (vite: any) => {
      vite.config.plugins = vite.config.plugins || []
      vite.config.plugins.push({
        name: 'code-examples',
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
      nitroConfig.virtual['#code-examples/nitro'] = () =>
        readFileSync(join(nuxt.options.buildDir, '/code-examples.mjs'), 'utf-8')
    })

    addServerHandler({
      method: 'get',
      route: '/api/code-examples/:component?',
      handler: resolver.resolve('../server/api/code-examples.get'),
    })
  },
})
