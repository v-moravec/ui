import { existsSync } from "fs"
import prompts from "prompts"

export async function checkNuxtProject() {
  if (!existsSync('package.json') || !existsSync('nuxt.config.js')) {
    const response = await prompts({
      type: 'confirm',
      name: 'value',
      message: 'This command should be run in the root of a Nuxt project, but either package.json or nuxt.config.js does not exist. Would you like to continue?',
      initial: false,
    })

    if (!response.value) {
      process.exit(0)
    }
  }
}