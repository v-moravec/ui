<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <h2 :class="cn('mb-2 text-balance text-3xl font-semibold leading-normal sm:mb-4 sm:text-4xl', props.class)">
    <slot />
  </h2>
</template>
