<script lang="ts" setup>
import { transformContent } from '@nuxt/content/transformers'

const props = withDefaults(
  defineProps<{
    name: string
    type?: 'component' | 'block'
  }>(),
  {
    type: 'component',
  }
)

const highlighter = await loadShiki()
const { data: ast } = await useAsyncData(`content-example-${props.name}-ast`, () =>
  transformContent('content:_markdown.md', `\`\`\`bash\n${`npx @v-moravec/ui add ${props.name}`}\n\`\`\``, {
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
  <UiTabs
    :items="[
      { label: 'CLI', slot: 'cli' },
      { label: 'Manual', slot: 'manual' },
    ]"
  >
    <template #cli>
      <div class="my-4">
        <ContentRenderer :value="ast" class="[&>div>pre]:!mt-0 [&>div>pre]:!rounded-t-none" />
        <Info class="my-4">Code will be added to {{ `~/components/${type === 'component' ? 'ui' : 'block'}/${props.name}/` }}. You can further customize it there.</Info>
      </div>
    </template>
    <template #manual>
      <UiCard class="my-4 p-4">
        Copy
        <NuxtLink
          target="_blank"
          external
          :to="`https://github.com/v-moravec/ui/tree/main/apps/docs/components/${type === 'component' ? 'ui' : 'block'}/${props.name}`"
          class="text-primary-500 inline-block underline"
        >
          contents from folder on Github
        </NuxtLink>
        to
        <span class="font-mono text-sm font-bold">
          {{ `~/components/${type === 'component' ? 'ui' : 'block'}/${props.name}/` }}
        </span>
        folder in your Nuxt project.
      </UiCard>
    </template>
  </UiTabs>
</template>
