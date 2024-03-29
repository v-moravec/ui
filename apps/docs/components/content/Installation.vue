<script lang="ts" setup>
import { transformContent } from '@nuxt/content/transformers'

const props = defineProps<{
  name: string
}>()

const highlighter = await loadShiki()
const { data: ast } = await useAsyncData(`content-example-${props.name}-ast`, () =>
  transformContent('content:_markdown.md', `\`\`\`bash\n${`npx @v-moravec/ui add ${props.name}`}\n\`\`\``, {
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
  <UiTabs
    :items="[
      { label: 'Manual', slot: 'manual' },
      { label: 'CLI', slot: 'cli' },
    ]"
  >
    <template #cli>
      <div class="my-4">
        <UiBadge class="mb-2 block w-fit">Coming soon</UiBadge>
        <ContentRenderer :value="ast" class="[&>div>pre]:!mt-0 [&>div>pre]:!rounded-t-none" />
      </div>
    </template>
    <template #manual>
      <UiCard class="my-4 p-4">
        Copy
        <NuxtLink
          target="_blank"
          external
          :to="`https://github.com/v-moravec/ui/tree/main/components/ui/${props.name}`"
          class="text-primary-500 inline-block underline"
        >
          contents from folder on Github
        </NuxtLink>
        to
        <span class="font-mono text-sm font-bold">{{ `~/components/ui/${props.name}/` }}</span>
        folder in your Nuxt project.
      </UiCard>
    </template>
  </UiTabs>
</template>
