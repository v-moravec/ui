<script setup lang="ts">
const blocks = [
  {
    title: 'Preview',
    name: 'NewsPreviewExample',
    component: defineAsyncComponent(() => import('~/components/content/blocks/NewsPreviewExample.vue')),
  },
  {
    title: 'Card',
    name: 'NewsCardExample',
    component: defineAsyncComponent(() => import('~/components/content/blocks/NewsCardExample.vue')),
  },
  {
    title: 'Grid',
    name: 'NewsGridExample',
    component: defineAsyncComponent(() => import('~/components/content/blocks/NewsGridExample.vue')),
  },
]
</script>

<template>
  <BlocksPage :blocks="blocks" title="Blog" installationName="blog" />
</template>
