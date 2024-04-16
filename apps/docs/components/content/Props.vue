<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const columns = [
  { field: 'name', label: 'Name' },
  { field: 'type', label: 'Type' },
]

const highlighter = await loadShiki()

const meta = await fetchComponentMeta(props.name)

const metaProps = meta?.meta?.props || []

const items = metaProps.map((item) => ({
  name: item.name,
  type: item.type,
}))

const formattedItems = items.map((item) => ({
  name: item.name,
  type: highlighter.codeToHtml(item.type.toString(), { lang: 'js', theme: 'poimandres' }),
}))
</script>

<template>
  <div v-if="metaProps.length" class="[&_pre]:w-fit [&_pre]:!p-1 [&_pre]:!px-2">
    <ProseH2 id="props">Props</ProseH2>
    <UiTable class="not-prose" :columns="columns" :items="formattedItems" />
  </div>
</template>
