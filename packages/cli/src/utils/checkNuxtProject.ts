import { existsSync } from 'fs'
import consola from 'consola'

export async function checkNuxtProject() {
  if (!existsSync('package.json') || !existsSync('nuxt.config.ts')) {
    consola.error(
      'This command should be run in the root of a Nuxt project, but either package.json or nuxt.config.ts does not exist.'
    )

    process.exit(1)
  }
}
