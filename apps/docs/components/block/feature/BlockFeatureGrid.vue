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
  <div class="w-full @container">
    <div class="mx-auto grid w-fit grid-cols-1 gap-4 @xl:grid-cols-2 @6xl:grid-cols-3 @6xl:gap-8">
      <BlockFeatureCard
        v-for="feature in props.features"
        :title="feature.title"
        :description="feature.description"
        :reversed="feature.reversed"
      />
    </div>
  </div>
</template>
