<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <section class="container mx-auto p-4">
    <div class="mb-8 flex flex-col">
      <UiTextSectionHeading>{{ props.title }}</UiTextSectionHeading>
      <UiTextNormal class="max-w-lg">
        {{ props.description }}
      </UiTextNormal>
    </div>
    <slot />
  </section>
</template>
