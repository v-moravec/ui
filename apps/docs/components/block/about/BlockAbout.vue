<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <BlockSectionSimple :title="props.title" :description="props.description">
    
  </BlockSectionSimple>
</template>
