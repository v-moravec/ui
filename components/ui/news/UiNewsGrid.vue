<script lang="ts" setup>
import type { NewsCardProps } from '~/components/ui/news/UiNewsCard.vue'

const props = defineProps<{
  news: NewsCardProps[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 gap-4 @2xl:grid-cols-2 @4xl:gap-8 @6xl:grid-cols-3">
    <UiNewsCard v-for="newsCard in props.news" v-bind="newsCard" />
  </div>
</template>
