<script setup lang="ts">
const blocks = [
  {
    title: 'Card',
    name: 'FeatureExample',
    component: defineAsyncComponent(() => import('~/components/content/blocks/FeatureExample.vue')),
  },
]
</script>

<template>
  <BlocksPage :blocks="blocks" title="Footer" installationName="footer" />
</template>
