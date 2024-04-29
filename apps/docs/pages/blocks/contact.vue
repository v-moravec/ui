<script setup lang="ts">
const blocks = [
  {
    title: 'Contact Form',
    name: 'BlockContact',
    component: defineAsyncComponent(() => import('~/components/block/contact/BlockContact.vue')),
  },
]
</script>

<template>
  <BlocksPage :blocks="blocks" title="Contact" installationName="contact" class="overflow-hidden" />
</template>
