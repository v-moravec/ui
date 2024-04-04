#!/usr/bin/env node
import { Command } from 'commander'

import { add } from '~/src/commands/add'
import { init } from '~/src/commands/init'
import { checkNuxtProject } from '~/src/utils/checkNuxtProject'

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

await checkNuxtProject()

const program = new Command()
  .name('@v-moravec/ui')
  .description('')
  .version('1.0.0', '-v, --version', 'display package version number')

program.addCommand(add).addCommand(init)

program.parse()
