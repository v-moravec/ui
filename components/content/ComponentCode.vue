<script lang="ts" setup>
import { transformContent } from '@nuxt/content/transformers'
import { useShikiHighlighter } from '@nuxtjs/mdc/runtime'

const props = defineProps<{
  name: string
  props: Record<string, unknown>
  class?: string
}>()

const data = await fetchContentExampleCode(props.name)

const hasCode = computed(() => !props.hiddenCode && (data?.code || instance.slots.code))

const shikiHighlighter = useShikiHighlighter({})
const codeHighlighter = async (code: string, lang: string, theme: any, highlights: number[]) =>
  shikiHighlighter.getHighlightedAST(code, lang, theme, { highlights })
const { data: ast } = await useAsyncData(`content-example-${props.name}-ast`, () =>
  transformContent('content:_markdown.md', `\`\`\`vue\n${data?.code ?? ''}\n\`\`\``, {
    markdown: {
      highlight: {
        highlighter: codeHighlighter,
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
