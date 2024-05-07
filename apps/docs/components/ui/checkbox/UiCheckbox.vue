<script setup lang="ts">
const props = defineProps<{
  label: string
}>()

const modelValue = defineModel<boolean>()
</script>

<template>
  <label class="flex cursor-pointer items-center gap-1.5 text-sm accent-primary">
    <input
      v-model="modelValue"
      type="checkbox"
      value=""
      class="h-4 w-4 cursor-pointer rounded-lg border-border text-primary"
    />
    {{ props.label }}
  </label>
</template>
