<script lang="ts" setup>
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <div :class="cn('border-border flex h-10 w-10 items-center justify-center rounded-full border text-xs font-medium', props.class)">
    <span>VM</span>
  </div>
</template>
