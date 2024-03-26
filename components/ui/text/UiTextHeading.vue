<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <h1
    :class="
      cn(
        'mb-10 text-balance text-4xl font-semibold !leading-tight sm:text-5xl sm:!leading-snug lg:text-6xl xl:text-7xl',
        props.class
      )
    "
  >
    <slot />
  </h1>
</template>
