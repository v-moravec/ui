<script setup lang="ts">
const props = defineProps<{
  remaining: number
  interval: number
  class?: string
}>()
</script>

<template>
  <span
    :style="{ width: (1 - remaining / interval) * 100 + '%' }"
    :class="cn('block h-1 w-full rounded-full bg-primary', props.class)"
  ></span>
</template>
