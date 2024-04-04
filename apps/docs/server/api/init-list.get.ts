import { defineEventHandler, createError, appendHeader } from 'h3'
// @ts-expect-error
import files from '#init-list/nitro'

export default defineEventHandler((event) => {
  appendHeader(event, 'Access-Control-Allow-Origin', '*')

  return files
})
