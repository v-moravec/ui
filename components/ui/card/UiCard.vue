<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    as?: keyof HTMLElementTagNameMap
  }>(),
  {
    as: 'div',
  }
)
</script>

<template>
  <as :class="cn('rounded-lg border border-border bg-background p-6', props.class)">
    <slot />
  </as>
</template>
