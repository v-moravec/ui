<script setup lang="ts">
const props = defineProps<{
  name: string
  props?: Record<string, unknown>
  class?: string
}>()
</script>

<template>
  <UiCard class="not-prose my-4 flex items-center justify-center rounded-lg border @container sm:p-20">
    <component :is="name" v-bind="props.props" :class="props.class">
      <ContentSlot v-if="$slots.default" :use="$slots.default" />
    </component>
  </UiCard>
</template>
