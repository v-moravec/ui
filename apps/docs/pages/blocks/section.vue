<script setup lang="ts">
const blocks = [
  {
    title: 'Simple',
    name: 'SectionSimpleExample',
    component: defineAsyncComponent(() => import('~/components/content/blocks/SectionSimpleExample.vue')),
  },
  {
    title: 'Left',
    name: 'SectionLeftExample',
    component: defineAsyncComponent(() => import('~/components/content/blocks/SectionLeftExample.vue')),
  },
]
</script>

<template>
  <BlocksPage :blocks="blocks" title="Section" installationName="section" />
</template>
