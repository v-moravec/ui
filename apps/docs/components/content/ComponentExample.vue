<script setup lang="ts">
const props = defineProps<{
  name: string
  props?: Record<string, unknown>
  class?: string
}>()
</script>

<template>
  <UiCard
    :class="
      cn(
        'not-prose relative z-10 my-4 max-w-full items-center justify-center rounded-lg border text-black @container dark:text-primary sm:flex sm:p-20',
        props.class
      )
    "
  >
    <component :is="name" v-bind="props.props">
      <ContentSlot v-if="$slots.default" :use="$slots.default" />
    </component>
  </UiCard>
</template>
