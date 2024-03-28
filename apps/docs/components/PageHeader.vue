<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
  links: { name: string; to: string }[]
}>()
</script>

<template>
  <div class="mb-6 flex flex-col gap-3">
    <div class="flex flex-col gap-2">
      <h1 class="text-4xl font-bold">{{ props.title }}</h1>
      <p v-if="props.description" class="text-lg text-neutral-600 dark:text-neutral-400">
        {{ props.description }}
      </p>
    </div>
    <div class="flex gap-2" v-if="props.links.length">
      <NuxtLink v-for="link in props.links" :key="link.name" :to="link.to" target="_blank">
        <UiButton size="sm" type="primary">
          {{ link.name }}
        </UiButton>
      </NuxtLink>
    </div>
  </div>
</template>
