import { Command } from 'commander'
import { z } from 'zod'
import { consola } from 'consola'
import { existsSync, promises as fs } from 'fs'
import prompts from 'prompts'
import { BASE_URL } from '~/src/constants'
import ora from 'ora'
import { handleError } from '~/src/utils/handleError'
import { installDependencies } from '~/src/utils/installDependencies'
import { removeDuplicates } from '~/src/utils/removeDuplicates'

const addSchema = z.object({
  componentsAndBlocks: z.array(z.string()),
})

const componentAndBlockSchema = z.object({
  code: z.string(),
  uiDependencies: z.string().array().optional(),
  dependencies: z.string().array().optional(),
  composableDependencies: z.string().array().optional(),
  shortPath: z.string(),
  pascalName: z.string(),
})

const composableSchema = z.object({
  code: z.string(),
  dependencies: z.string().array().optional(),
  shortPath: z.string(),
})

const componentsAndBlocksSchema = z.record(z.string(), z.array(componentAndBlockSchema))
const composablesSchema = z.record(z.string(), composableSchema)

async function addComponent(shortPath: string, code: string) {
  if (existsSync('./' + shortPath)) {
    return
  }

  const path = './' + shortPath.split('/').slice(0, -1).join('/')
  if (!existsSync(path)) {
    await fs.mkdir(path, { recursive: true })
  }

  await fs.writeFile('./' + shortPath, code)
}

async function addComposable(shortPath: string, code: string) {
  if (existsSync('./' + shortPath)) {
    return
  }

  const path = './' + shortPath.split('/').slice(0, -1).join('/')
  if (!existsSync(path)) {
    await fs.mkdir(path, { recursive: true })
  }

  await fs.writeFile('./' + shortPath, code)
}

export const add = new Command()
  .name('add')
  .description('add components and blocks to your application')
  .argument('[componentsAndBlocks...]', 'components and blocks to add')
  .action(async (componentsAndBlocks, opts) => {
    consola.box('Let\'s add some components and blocks!')

    const options = addSchema.safeParse({ componentsAndBlocks })
    const spinner = ora('Loading components and blocks')

    if (!options.success) {
      return handleError(options.error)
    }

    if (!options.data.componentsAndBlocks.length) {
      return handleError('No components or blocks provided')
    }

    spinner.start()
    const components = componentsAndBlocksSchema.safeParse(await (await fetch(BASE_URL + '/component-list')).json())
    const blocks = componentsAndBlocksSchema.safeParse(await (await fetch(BASE_URL + '/block-list')).json())
    const composables = composablesSchema.safeParse(await (await fetch(BASE_URL + '/composable-list')).json())
    spinner.succeed('Components and blocks loaded')

    if (!components.success) {
      return handleError(components.error)
    }
    if (!blocks.success) {
      return handleError(blocks.error)
    }
    if (!composables.success) {
      return handleError(composables.error)
    }

    const dependencies: string[] = []
    const composableDependencies: string[] = []
    const uiDependencies: string[] = []

    for (const component of options.data.componentsAndBlocks) {
      if (!components.data[component] && !blocks.data[component]) {
        consola.warn(`Component or block ${component} not found`)
        continue
      }

      if (components.data[component]) {
        for (const c of components.data[component]) {
          const path = './' + c.shortPath.split('/').slice(0, -1).join('/')
          if (!existsSync(path)) {
            await fs.mkdir(path, { recursive: true })
          }

          if (existsSync('./' + c.shortPath)) {
            const response = await prompts({
              type: 'confirm',
              name: 'value',
              message: `Component ${c.pascalName} already exists. Would you like to overwrite it?`,
              initial: false,
            })

            if (!response.value) {
              continue
            }
          }

          if (c.dependencies) {
            dependencies.push(...c.dependencies)
          }
          if (c.uiDependencies) {
            uiDependencies.push(...c.uiDependencies)
          }
          if (c.composableDependencies) {
            composableDependencies.push(...c.composableDependencies)
          }

          await fs.writeFile('./' + c.shortPath, c.code)

          consola.success(`Succesfully added component to ~/${c.shortPath}`)
        }
      } else if (blocks.data[component]) {
        const availableVersions = blocks.data[component].map((b) => b.pascalName)

        const response = await prompts({
          type: 'select',
          name: 'value',
          message: `Choose a version of block ${component}`,
          choices: availableVersions.map((v, index) => ({ title: v, value: index })),
          initial: 0,
        })

        const block = blocks.data[component][response.value]

        const path = './' + block.shortPath.split('/').slice(0, -1).join('/')
        if (!existsSync(path)) {
          await fs.mkdir(path, { recursive: true })
        }

        if (existsSync('./' + block.shortPath)) {
          const response = await prompts({
            type: 'confirm',
            name: 'value',
            message: `Block ${block.pascalName} already exists. Would you like to overwrite it?`,
            initial: false,
          })

          if (!response.value) {
            continue
          }
        }

        if (block.dependencies) {
          dependencies.push(...block.dependencies)
        }
        if (block.uiDependencies) {
          uiDependencies.push(...block.uiDependencies)
        }
        if (block.composableDependencies) {
          composableDependencies.push(...block.composableDependencies)
        }

        await fs.writeFile('./' + block.shortPath, block.code)

        consola.success(`Succesfully added block to ~/${block.shortPath}`)
      }
    }

    async function addUiDependency(uiDependency: string) {
      if (!components.success) return

      if (components.data[uiDependency]) {
        for (const c of components.data[uiDependency]) {
          if (existsSync('./' + c.shortPath)) {
            continue
          }

          await addComponent(c.shortPath, c.code)

          if (c.uiDependencies) {
            for (const uiDependency of c.uiDependencies) {
              await addUiDependency(uiDependency)
            }
          }
          if (c.dependencies) {
            dependencies.push(...c.dependencies)
          }
          if (c.composableDependencies) {
            composableDependencies.push(...c.composableDependencies)
          }
        }
      }
    }

    if (uiDependencies.length) {
      for (const uiDependency of removeDuplicates(uiDependencies)) {
        await addUiDependency(uiDependency)
      }
    }

    if (composableDependencies.length) {
      for (const composableDependency of removeDuplicates(composableDependencies)) {
        if (composables.data[composableDependency]) {
          await addComposable(
            composables.data[composableDependency].shortPath,
            composables.data[composableDependency].code
          )

          const deps = composables.data[composableDependency].dependencies

          if (deps) {
            dependencies.push(...deps)
          }
        }
      }
    }

    if (dependencies.length) {
      await installDependencies(removeDuplicates(dependencies))
    }

    consola.info('All components and blocks added.')
    consola.warn('You might need to restart your development server to see the changes.')
  })
