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
            <UiCard>
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
