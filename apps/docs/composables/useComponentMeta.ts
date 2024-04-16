const useComponentMetasState = () =>
  useState<Record<string, ComponentData | Promise<ComponentData>>>('component-meta', () => ({}))

import type { ComponentMeta } from 'vue-component-meta'
import type { Component } from '@nuxt/schema'

type ComponentData = Omit<Component, 'filePath' | 'shortPath'> & {
  meta: ComponentMeta
  fullPath?: string
  filePath?: string
  shortPath?: string
}

export async function fetchComponentMeta(name?: string) {
  if (!name) return
  const state = useComponentMetasState()

  if (state.value[name]?.then) {
    await state.value[name]
    return state.value[name]
  }
  if (state.value[name]) {
    return state.value[name]
  }

  // add to nitro prerender
  if (process.server) {
    const event = useRequestEvent()
    event.node.res.setHeader(
      'x-nitro-prerender',
      [event.node.res.getHeader('x-nitro-prerender'), `/api/component-meta/${name}.json`].filter(Boolean).join(',')
    )
  }
  state.value[name] = $fetch<ComponentData>(`/api/component-meta/${name}.json`).then((data) => {
    state.value[name] = data
  })

  await state.value[name]
  return state.value[name]
}
