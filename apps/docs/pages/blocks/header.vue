<script setup lang="ts">
const blocks = [
  {
    title: 'Simple',
    name: 'BlockHeader',
    component: defineAsyncComponent(() => import('~/components/block/header/BlockHeader.vue')),
  },
]
</script>

<template>
  <BlocksPage :blocks="blocks" title="Header" installationName="header" />
</template>
