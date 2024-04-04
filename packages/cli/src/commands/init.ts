import { Command } from 'commander'
import { BASE_URL } from '~/src/constants'
import ora from 'ora'
import { z } from 'zod'
import { handleError } from '~/src/utils/handleError'
import { existsSync, promises as fs } from 'fs'
import prompts from 'prompts'
import { installDependencies } from '~/src/utils/installDependencies'

const initFilesSchema = z.array(
  z.object({
    code: z.string(),
    dependencies: z.string().array().optional(),
    shortPath: z.string(),
  })
)

export const init = new Command()
  .name('init')
  .description('init project with v-moravec/ui')
  .action(async () => {
    const spinner = ora('Loading files').start()
    const initFiles = initFilesSchema.safeParse(await (await fetch(BASE_URL + '/init-list')).json())
    spinner.succeed('Files loaded')

    if (!initFiles.success) {
      return handleError(initFiles.error)
    }

    const dependencies: string[] = []

    for (const file of initFiles.data) {
      const path = './' + file.shortPath.split('/').slice(0, -1).join('/')
      if (!existsSync(path)) {
        await fs.mkdir(path, { recursive: true })
      }

      if (existsSync('./' + file.shortPath)) {
        const response = await prompts({
          type: 'confirm',
          name: 'value',
          message: `File ${file.shortPath} already exists. Would you like to overwrite it?`,
          initial: false,
        })

        if (!response.value) {
          continue
        }
      }

      if (file.dependencies) {
        dependencies.push(...file.dependencies)
      }

      await fs.writeFile('./' + file.shortPath, file.code)
    }

    if (dependencies.length) {
      await installDependencies(dependencies)
    }
  })
