<script lang="ts" setup>
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <div :class="cn('rounded-lg border border-border bg-background p-6', props.class)">
    <slot />
  </div>
</template>
