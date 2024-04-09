<script lang="ts" setup>
import { transformContent } from '@nuxt/content/transformers'

const props = defineProps<{
  name: string
  class?: string
}>()

const data = await fetchCodeExample(props.name)

const hasCode = computed(() => data?.code)

const highlighter = await loadShiki()
const { data: ast } = await useAsyncData(`content-example-${props.name}-ast`, () =>
  transformContent('content:_markdown.md', `\`\`\`vue\n${data?.code ?? ''}\n\`\`\``, {
    markdown: {
      highlight: {
        highlighter,
        theme: {
          light: 'poimandres',
          default: 'poimandres',
          dark: 'poimandres',
        },
      },
    },
  })
)
</script>

<template>
  <div class="my-4" v-if="hasCode">
    <ContentRenderer :value="ast" class="[&>div>pre]:!mt-0 [&>div>pre]:overflow-auto [&>div>pre]:!rounded-t-none" />
  </div>
</template>
