<script setup lang="ts">
const props = defineProps<{
  as?: keyof HTMLElementTagNameMap
  class?: string
}>()
</script>

<template>
  <component :is="props.as ?? 'div'" :class="cn('container mx-auto px-4', props.class)">
    <slot />
  </component>
</template>
