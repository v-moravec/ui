<script lang="ts" setup>
const props = defineProps<{
  as?: keyof HTMLElementTagNameMap
  class?: string
}>()
</script>

<template>
  <component
    :is="as ?? 'span'"
    :class="cn('rounded-lg bg-primary px-2 py-1 text-xs font-bold text-primary-contrast', props.class)"
  >
    <slot />
  </component>
</template>
