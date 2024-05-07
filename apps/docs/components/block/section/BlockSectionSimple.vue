<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <section class="container mx-auto p-4 text-center">
    <div class="mx-auto mb-8 flex flex-col items-center">
      <UiTextSectionHeading :class="{ 'sm:mb-4': !!props.description }">{{ props.title }}</UiTextSectionHeading>
      <UiTextNormal v-if="props.description" class="mb-8 max-w-lg">
        {{ props.description }}
      </UiTextNormal>
    </div>
    <slot />
  </section>
</template>
