<script setup lang="ts">
const blocks = [
  {
    title: 'Simple',
    name: 'BlockFooter',
    component: defineAsyncComponent(() => import('~/components/block/footer/BlockFooter.vue')),
  },
]
</script>

<template>
  <BlocksPage :blocks="blocks" title="Footer" installationName="footer" />
</template>
