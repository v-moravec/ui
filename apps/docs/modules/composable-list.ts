import { defineNuxtModule, addTemplate, addServerHandler, createResolver } from '@nuxt/kit'

import { existsSync, readFileSync } from 'fs'
import { dirname, join } from 'pathe'
import fsp from 'fs/promises'

export default defineNuxtModule({
  meta: {
    name: 'composable-list',
  },
  async setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    let _configResolved: any
    let composables: { code: string; dependencies: string[] | undefined; shortPath: string }[] = []
    const outputPath = join(nuxt.options.buildDir, 'composable-list')

    async function getDependencies() {
      const files = await fsp.readdir('composables')

      for (const file of files) {
        const code = await fsp.readFile('composables/' + file, 'utf-8')

        const dependencies = code
          ? code
              .match(/import[^]*?from[^]*?['"]([^'"]+)['"]/gm)
              ?.map((dependency) => {
                return dependency.split('from')[1].trim().replace(/['";]/g, '')
              })
              .filter((v) => !v.startsWith('.') && !v.startsWith('~') && v !== 'vue' && v !== 'nuxt')
          : undefined

        composables.push({
          code,
          dependencies,
          shortPath: 'composables/' + file,
        })
      }
    }

    const getStringifiedComponents = () => JSON.stringify(composables, null, 2)

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
      filename: 'composable-list.mjs',
      getContents: () => 'export default {}',
      write: true,
    })

    nuxt.hook('vite:extend', (vite: any) => {
      vite.config.plugins = vite.config.plugins || []
      vite.config.plugins.push({
        name: 'composable-list',
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
      nitroConfig.virtual['#composable-list/nitro'] = () =>
        readFileSync(join(nuxt.options.buildDir, '/composable-list.mjs'), 'utf-8')
    })

    addServerHandler({
      method: 'get',
      route: '/api/composable-list/:component?',
      handler: resolver.resolve('../server/api/composable-list.get'),
    })
  },
})
