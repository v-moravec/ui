<script setup lang="ts">
const blocks = [
  {
    title: 'Simple',
    name: 'BlockHeroSimple',
    component: defineAsyncComponent(() => import('~/components/block/hero/BlockHeroSimple.vue')),
  },
  {
    title: 'Image',
    name: 'BlockHeroImage',
    component: defineAsyncComponent(() => import('~/components/block/hero/BlockHeroImage.vue')),
  },
]
</script>

<template>
  <div class="@container">
    <BlocksPage
      :blocks="blocks"
      title="Hero"
      installationName="hero"
      class="flex max-h-[800px] items-center justify-center overflow-hidden p-0 @7xl:aspect-[16/9] sm:max-h-none"
    />
  </div>
</template>
