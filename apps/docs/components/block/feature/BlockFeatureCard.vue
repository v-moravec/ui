<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    description: string
    class?: string
    reversed?: boolean
  }>(),
  {
    title: 'Static Typing',
    description:
      'TypeScript introduces static typing, allowing developers to specify the type of variables, function parameters, and return types. This helps catch type-related errors early in the development process.',
    orientation: 'vertical',
    reversed: false,
  }
)
</script>

<template>
  <UiCard :class="cn('relative max-w-xs', props.reversed ? 'mb-8 pb-12' : 'mt-8 pt-12', props.class)">
    <div class="flex flex-col gap-2">
      <UiTextTitle>
        {{ props.title }}
      </UiTextTitle>
      <UiTextNormal>
        {{ props.description }}
      </UiTextNormal>
    </div>
    <div
      class="absolute left-1/2 flex size-16 -translate-x-1/2 items-center justify-center rounded-lg bg-primary p-4 text-primary-contrast"
      :class="props.reversed ? '-bottom-8' : '-top-8'"
    >
      <Icon name="mdi:language-typescript" class="h-full w-full" />
    </div>
  </UiCard>
</template>
