<script setup lang="ts"></script>

<template>
  <main class="container mx-auto px-4 py-10">
    <div>
      <UiTabs
        :items="[
          { label: 'Preview', slot: 'preview' },
          { label: 'Code', slot: 'code' },
        ]"
      >
        <template #bar>
          <UiTextTitle class="text-xl">Simple</UiTextTitle>
        </template>
        <template #preview>
          <div class="my-2 @container">
            <UiHeroSimple class="mx-auto flex items-center justify-center rounded-lg border @7xl:aspect-[16/9]" />
          </div>
        </template>
        <template #code>
          <ComponentCode name="UiHeroSimple" />
        </template>
      </UiTabs>
    </div>
  </main>
</template>
