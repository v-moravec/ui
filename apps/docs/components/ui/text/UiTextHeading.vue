<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <h1
    :class="
      cn(
        'mb-8 lg:mb-10 text-balance text-4xl font-bold !leading-tight sm:text-5xl sm:!leading-snug lg:text-6xl xl:text-7xl',
        props.class
      )
    "
  >
    <slot />
  </h1>
</template>
