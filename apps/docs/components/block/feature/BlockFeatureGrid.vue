<script setup lang="ts">
const props = defineProps<{
  features: {
    title: string
    description: string
    reversed?: boolean
  }[]
  class?: string
  reversed?: boolean
}>()
</script>

<template>
  <div class="grid grid-cols-1 gap-4 @xl:grid-cols-2 @4xl:grid-cols-3 @4xl:gap-8">
    <BlockFeatureCard
      v-for="feature in props.features"
      :title="feature.title"
      :description="feature.description"
      :reversed="feature.reversed"
    />
  </div>
</template>
