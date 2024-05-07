<script setup lang="ts">
const props = defineProps<{
  class?: string | Record<string, boolean>
}>()
</script>

<template>
  <h2 :class="cn('mb-2 text-balance text-4xl font-semibold leading-normal sm:mb-8 sm:text-5xl', props.class)">
    <slot />
  </h2>
</template>
