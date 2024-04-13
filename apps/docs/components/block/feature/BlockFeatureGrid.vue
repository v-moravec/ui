<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    description: string
    class?: string
    reversed?: boolean
  }>(),
  {
    title: 'Static Typing',
    description:
      'TypeScript introduces static typing, allowing developers to specify the type of variables, function parameters, and return types. This helps catch type-related errors early in the development process.',
    orientation: 'vertical',
    reversed: false,
  }
)
</script>

<template>
  <div class="grid grid-cols-1 gap-4 @xl:grid-cols-2 @4xl:grid-cols-3 @4xl:gap-8">
    <BlockFeatureCard />
    <BlockFeatureCard />
    <BlockFeatureCard />
  </div>
</template>
