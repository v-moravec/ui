<script setup lang="ts">
const props = defineProps<{
  blocks: { title: string; name: string; component: any }[]
  title: string
  installationName: string
  class?: string
}>()
</script>

<template>
  <main class="container mx-auto px-4 py-10">
    <UiTextHeading>{{ props.title }}</UiTextHeading>
    <Installation :name="props.installationName" type="block"></Installation>
    <BlocksPreviewAndCode :class="props.class" :blocks="props.blocks" />
  </main>
</template>
