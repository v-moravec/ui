import { defineEventHandler, createError, appendHeader } from 'h3'
import { pascalCase } from 'scule'
// @ts-expect-error
import components from '#code-examples/nitro'

export default defineEventHandler((event) => {
  appendHeader(event, 'Access-Control-Allow-Origin', '*')
  const componentName = (event.context.params['component?'] || '').replace(/\.json$/, '')
  if (componentName) {
    const component = components[pascalCase(componentName)]
    if (!component) {
      throw createError({
        statusMessage: 'Examples not found!',
        statusCode: 404,
      })
    }
    return component
  }
})
