<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    description: string
    class?: string
    reversed?: boolean
  }>(),
  {
    reversed: false,
  }
)
</script>

<template>
  <UiCard
    :class="
      cn(
        'relative p-10 hover:bg-secondary hover:text-secondary-contrast',
        props.reversed ? 'mb-8 pb-12' : 'mt-8 pt-12',
        props.class
      )
    "
  >
    <div class="flex flex-col gap-4">
      <UiTextTitle class="text-center text-3xl">
        {{ props.title }}
      </UiTextTitle>
      <UiTextNormal class="max-w-sm">
        {{ props.description }}
      </UiTextNormal>
    </div>
    <div
      class="absolute left-1/2 flex size-16 -translate-x-1/2 items-center justify-center rounded-lg bg-primary p-3 text-primary-contrast"
      :class="props.reversed ? '-bottom-8' : '-top-8'"
    >
      <Icon name="fa6-solid:palette" class="h-full w-full" />
    </div>
  </UiCard>
</template>
