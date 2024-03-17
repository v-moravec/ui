<script lang="ts" setup>
import { transformContent } from '@nuxt/content/transformers'

const props = defineProps<{
  name: string
  props: Record<string, unknown>
  class?: string
}>()

const data = await fetchContentExampleCode(props.name)

const hasCode = computed(() => !props.hiddenCode && (data?.code || instance.slots.code))

const highlighter = useShikiHighlighter()
const { data: ast } = await useAsyncData(`content-example-${props.name}-ast`, () =>
  transformContent('content:_markdown.md', `\`\`\`vue\n${data?.code ?? ''}\n\`\`\``, {
    markdown: {
      highlight: {
        highlighter,
        theme: {
          light: 'aurora-x',
          default: 'aurora-x',
          dark: 'aurora-x',
        },
      },
    },
  })
)
</script>

<template>
  <div class="my-4" v-if="hasCode">
    <ContentSlot v-if="$slots.code" :use="$slots.code" />
    <ContentRenderer v-else :value="ast" class="[&>div>pre]:!mt-0 [&>div>pre]:!rounded-t-none" />
  </div>
</template>
