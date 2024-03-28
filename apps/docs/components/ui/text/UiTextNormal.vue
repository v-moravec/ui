<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <p :class="cn('leading-relaxed', props.class)">
    <slot />
  </p>
</template>
