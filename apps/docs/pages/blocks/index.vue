<script setup lang="ts">
import BlocksPreviewHero from '~/components/blocks/preview/hero.vue'
import BlocksPreviewPlaceholder from '~/components/blocks/preview/placeholder.vue'

const categories = [
  {
    title: 'Landing',
    items: [
      {
        title: 'Hero',
        to: '/blocks/hero',
        component: BlocksPreviewHero,
      },
      {
        title: 'Sections',
        to: '/blocks/auth',
        component: BlocksPreviewPlaceholder,
      },
      {
        title: 'Features',
        to: '/blocks/features',
        component: BlocksPreviewPlaceholder,
      },
      {
        title: 'References',
        to: '/blocks/auth',
        component: BlocksPreviewPlaceholder,
      },
      {
        title: 'About',
        to: '/blocks/auth',
        component: BlocksPreviewPlaceholder,
      },
      {
        title: 'Showcase',
        to: '/blocks/auth',
        component: BlocksPreviewPlaceholder,
      },
      {
        title: 'Contact',
        to: '/blocks/auth',
        component: BlocksPreviewPlaceholder,
      },
      {
        title: 'Auth',
        to: '/blocks/auth',
        component: BlocksPreviewPlaceholder,
      },
      {
        title: 'Blog',
        to: '/blocks/blog',
        component: BlocksPreviewPlaceholder,
      },
    ],
  },
  {
    title: 'General',
    items: [
      {
        title: 'Header',
        to: '/blocks',
        component: BlocksPreviewPlaceholder,
      },
      {
        title: 'Footer',
        to: '/blocks',
        component: BlocksPreviewPlaceholder,
      },
    ],
  },
]
</script>

<template>
  <main class="container mx-auto px-4 py-10">
    <UiTextHeading class="mx-auto max-w-md text-center lg:max-w-lg xl:max-w-2xl">
      Build your website with
      <span class="bg-primary px-4 text-primary-contrast">blocks</span>
    </UiTextHeading>
    <section v-for="category in categories" class="my-5">
      <UiTextSectionHeading>{{ category.title }}</UiTextSectionHeading>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <NuxtLink v-for="item in category.items" class="flex flex-col gap-2" :to="item.to">
          <component :is="item.component" class="aspect-[9/14] md:aspect-[16/9]" />
          <UiTextTitle>{{ item.title }}</UiTextTitle>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
