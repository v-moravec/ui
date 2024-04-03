import { Command } from 'commander'
import { z } from 'zod'
import { ZodError } from 'zod'
import { consola } from 'consola'
import { existsSync, promises as fs } from 'fs'
import prompts from 'prompts'
import { BASE_URL } from '~/src/constants'
import ora from 'ora'

function handleError(error: string | Error | ZodError) {
  if (typeof error === 'string') {
    consola.error(error)
    process.exit(1)
  }

  if (error instanceof ZodError) {
    error.errors.forEach((e) => {
      consola.error(e.message)
    })
    process.exit(1)
  }

  if (error instanceof Error) {
    consola.error(error.message)
    process.exit(1)
  }

  consola.error('Something went wrong. Please try again.')
  process.exit(1)
}

const addSchema = z.object({
  componentsAndBlocks: z.array(z.string()),
})

const componentAndBlockSchema = z.object({
  code: z.string(),
  uiDependencies: z.string().optional().array().optional(),
  dependencies: z.string().optional().array().optional(),
  composableDependencies: z.string().optional().array().optional(),
  shortPath: z.string(),
  pascalName: z.string(),
})

const componentsAndBlocksSchema = z.record(z.string(), z.array(componentAndBlockSchema))

export const add = new Command()
  .name('add')
  .description('add components and blocks to your application')
  .argument('[componentsAndBlocks...]', 'components and blocks to add')
  .action(async (componentsAndBlocks, opts) => {
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
    spinner.succeed('Components and blocks loaded')

    if (!components.success) {
      return handleError(components.error)
    }
    if (!blocks.success) {
      return handleError(blocks.error)
    }

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

          await fs.writeFile('./' + c.shortPath, c.code)
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

        if (!response.value) {
          consola.warn(`No version of ${component} block selected`)
          return
        }

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

        await fs.writeFile('./' + block.shortPath, block.code)
      }
    }
  })
