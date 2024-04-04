import { defineNuxtModule, addTemplate, addServerHandler, createResolver } from '@nuxt/kit'

import { existsSync, readFileSync } from 'fs'
import { dirname, join } from 'pathe'
import fsp from 'fs/promises'

export default defineNuxtModule({
  meta: {
    name: 'init-list',
  },
  async setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    let _configResolved: any
    let initFiles: { code: string; dependencies: string[] | undefined; shortPath: string }[] = []
    const outputPath = join(nuxt.options.buildDir, 'init-list')

    function removeDuplicates(arr?: string[]) {
      if (!arr) {
        return undefined
      }
      return arr.filter((v, i) => arr.indexOf(v) === i)
    }

    async function getDependencies() {
      const paths = ['utils/cn.ts', 'tailwind.config.ts', 'assets/css/tailwind.css', 'assets/css/themes.css']

      for (const path of paths) {
        const code = await fsp.readFile(path, 'utf-8')

        const dependencies = code
          ? code
              .match(/import[^]*?from[^]*?['"]([^'"]+)['"]/gm)
              ?.map((dependency) => {
                return dependency.split('from')[1].trim().replace(/['";]/g, '')
              })
              .filter((v) => !v.startsWith('.') && !v.startsWith('~') && v !== 'vue' && v !== 'nuxt')
          : undefined

        initFiles.push({
          code,
          dependencies: removeDuplicates(dependencies),
          shortPath: path,
        })
      }
    }

    const getStringifiedComponents = () => JSON.stringify(initFiles, null, 2)

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

    addTemplate({
      filename: 'init-list.mjs',
      getContents: () => 'export default {}',
      write: true,
    })

    nuxt.hook('vite:extend', (vite: any) => {
      vite.config.plugins = vite.config.plugins || []
      vite.config.plugins.push({
        name: 'init-list',
        enforce: 'post',
        async buildStart() {
          if (_configResolved?.build.ssr) {
            return
          }
          await getDependencies()
          await updateOutput()
        },
        configResolved(config) {
          _configResolved = config
        },
      })
    })

    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.virtual = nitroConfig.virtual || {}
      nitroConfig.virtual['#init-list/nitro'] = () =>
        readFileSync(join(nuxt.options.buildDir, '/init-list.mjs'), 'utf-8')
    })

    addServerHandler({
      method: 'get',
      route: '/api/init-list/:component?',
      handler: resolver.resolve('../server/api/init-list.get'),
    })
  },
})
