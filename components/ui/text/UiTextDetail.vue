<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <span :class="cn('text-xs', props.class)">
    <slot />
  </span>
</template>
