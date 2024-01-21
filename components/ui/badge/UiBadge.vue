<script lang="ts" setup>
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <span :class="cn('rounded-lg bg-primary px-2 py-1 text-xs font-bold text-primary-contrast', props.class)">
    <slot />
  </span>
</template>
