#!/usr/bin/env node
import { Command } from 'commander'

import { add } from '~/src/commands/add'

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

const program = new Command()
  .name('@v-moravec/ui')
  .description('')
  .version('1.0.0', '-v, --version', 'display package version number')

program.addCommand(add)

program.parse()
