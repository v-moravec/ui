import { ZodError } from 'zod'
import consola from 'consola'

export function handleError(error: string | Error | ZodError) {
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
