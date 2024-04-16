<script setup lang="ts">
const blocks = [
  {
    title: 'Simple',
    name: 'ReferencesSimpleExample',
    component: defineAsyncComponent(() => import('~/components/content/blocks/ReferencesSimpleExample.vue')),
  },
]
</script>

<template>
  <BlocksPage :blocks="blocks" title="References" installationName="references" class="block" />
</template>
