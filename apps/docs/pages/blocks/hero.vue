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
  <main class="container mx-auto px-4 py-10">
    <div>
      <UiTabs
        :items="[
          { label: 'Preview', slot: 'preview' },
          { label: 'Code', slot: 'code' },
        ]"
        v-for="block in blocks"
      >
        <template #bar>
          <UiTextTitle class="text-xl">{{ block.title }}</UiTextTitle>
        </template>
        <template #preview>
          <div class="my-2 @container">
            <UiCard
              class="flex max-h-[800px] items-center justify-center overflow-hidden p-0 @7xl:aspect-[16/9] sm:max-h-none"
            >
              <component :is="block.component" />
            </UiCard>
          </div>
        </template>
        <template #code>
          <ComponentCode :name="block.name" />
        </template>
      </UiTabs>
    </div>
  </main>
</template>
