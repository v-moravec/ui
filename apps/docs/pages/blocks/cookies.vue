<script setup lang="ts">
const blocks = [
  {
    title: 'Banner',
    name: 'BlockCookiesBanner',
    component: defineAsyncComponent(() => import('~/components/block/cookies/BlockCookiesBanner.vue')),
  },
]
</script>

<template>
  <div class="@container">
    <BlocksPage :blocks="blocks" title="Cookies" installationName="cookies" />
  </div>
</template>
