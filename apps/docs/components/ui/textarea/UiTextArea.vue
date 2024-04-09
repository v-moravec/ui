<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <textarea
    :class="cn('w-full rounded-lg border border-neutral-300 p-2 text-sm dark:border-neutral-700', props.class)"
  ></textarea>
</template>
