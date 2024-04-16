<script setup lang="ts">
const text = defineModel<string>()

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <textarea
    rows="5"
    :class="cn('w-full rounded-lg border border-neutral-300 p-2 text-sm dark:border-neutral-700', props.class)"
    v-model="text"
  ></textarea>
</template>
