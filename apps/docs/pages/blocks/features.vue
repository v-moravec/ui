<script setup lang="ts">
const blocks = [
  {
    title: 'Card',
    name: 'FeatureExample',
    component: defineAsyncComponent(() => import('~/components/content/blocks/FeatureExample.vue')),
  },
  {
    title: 'Grid',
    name: 'FeatureGridExample',
    component: defineAsyncComponent(() => import('~/components/content/blocks/FeatureGridExample.vue')),
  },
]
</script>

<template>
  <BlocksPage :blocks="blocks" title="Features" installationName="feature" />
</template>
