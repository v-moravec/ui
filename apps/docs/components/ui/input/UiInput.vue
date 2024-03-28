<script setup lang="ts">
import type { HTMLAttributes, InputHTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  type?: InputHTMLAttributes['type']
  placeholder?: InputHTMLAttributes['placeholder']
}>()

const modelValue = defineModel()
</script>

<template>
  <input
    v-bind="props"
    v-model="modelValue"
    :class="cn('w-full rounded-lg border border-neutral-300 p-2 text-sm dark:border-neutral-700', props.class)"
  />
</template>
