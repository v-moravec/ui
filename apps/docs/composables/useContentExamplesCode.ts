const useCodeExamplesState = () => useState('code-examples', () => ({}))

export async function fetchCodeExample(name?: string) {
  if (!name) return
  const state = useCodeExamplesState()

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
      [event.node.res.getHeader('x-nitro-prerender'), `/api/code-examples/${name}.json`].filter(Boolean).join(',')
    )
  }
  state.value[name] = $fetch(`/api/code-examples/${name}.json`).then((data) => {
    state.value[name] = data
  })

  await state.value[name]
  return state.value[name]
}
