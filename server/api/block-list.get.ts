import { defineEventHandler, createError, appendHeader } from 'h3'
import { pascalCase } from 'scule'
// @ts-expect-error
import blocks from '#block-list/nitro'

export default defineEventHandler((event) => {
  appendHeader(event, 'Access-Control-Allow-Origin', '*')
  const blockName = (event.context.params['block?'] || '').replace(/\.json$/, '')
  if (blockName) {
    const block = blocks[blockName]
    if (!block) {
      throw createError({
        statusMessage: 'Examples not found!',
        statusCode: 404,
      })
    }
    return block
  }

  return blocks
})
