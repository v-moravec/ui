<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <h2 :class="cn('text-balance text-lg font-semibold leading-normal', props.class)">
    <slot />
  </h2>
</template>
