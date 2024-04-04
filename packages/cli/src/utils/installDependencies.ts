import { getPackageManager } from '~/src/utils/getPackageManager'
import { handleError } from '~/src/utils/handleError'
import { execa } from 'execa'
import ora from 'ora'

export async function installDependencies(dependencies: string[]) {
  const spinner = ora().start('Installing dependencies').start()

  const cwd = process.cwd()

  const packageManager = await getPackageManager(cwd)

  await execa(packageManager, [packageManager === 'npm' ? 'install' : 'add', ...dependencies], {
    cwd,
  }).catch((error) => {
    handleError(error)
  })

  spinner.succeed('Dependencies installed')
}
