<script setup lang="ts">
const modelValue = defineModel<boolean>()
</script>

<template>
  <label class="flex cursor-pointer items-center gap-1.5 text-sm font-medium accent-primary text-gray-900 dark:text-gray-300">
    <input
      v-model="modelValue"
      type="checkbox"
      value=""
      class="h-4 w-4 cursor-pointer rounded-lg border-border text-primary"
    />
    This is a checkbox
  </label>
</template>
