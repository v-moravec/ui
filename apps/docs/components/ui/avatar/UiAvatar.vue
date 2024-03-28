<script lang="ts" setup>
const props = defineProps<{
  initials: string
  class?: string
}>()
</script>

<template>
  <div
    :class="
      cn(
        'flex h-10 w-10 items-center justify-center rounded-full border border-border text-xs font-medium',
        props.class
      )
    "
  >
    <span class="truncate p-1">{{ props.initials }}</span>
  </div>
</template>
