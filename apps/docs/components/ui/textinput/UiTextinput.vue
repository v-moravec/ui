<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'

const props = defineProps<{
  class?: string
  type?: InputHTMLAttributes['type']
  placeholder?: string
}>()

const modelValue = defineModel<string | number>()
</script>

<template>
  <input
    v-bind="props"
    v-model="modelValue"
    :class="cn('w-full rounded-lg border border-neutral-300 p-2 text-sm dark:border-neutral-700', props.class)"
  />
</template>
