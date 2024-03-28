<script lang="ts" setup>
import type { NewsCardProps } from '~/components/block/news/BlockNewsCard.vue'

const props = defineProps<{
  news: NewsCardProps[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 gap-4 @2xl:grid-cols-2 @4xl:gap-8 @6xl:grid-cols-3">
    <BlockNewsCard v-for="newsCard in props.news" v-bind="newsCard" />
  </div>
</template>
