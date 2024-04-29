<script setup lang="ts">
import BlocksPreviewHero from '~/components/blocks/preview/hero.vue'
import BlocksPreviewPlaceholder from '~/components/blocks/preview/placeholder.vue'
import BlocksPreviewBlog from '~/components/blocks/preview/blog.vue'
import BlocksPreviewSection from '~/components/blocks/preview/section.vue'
import BlocksPreviewReferences from '~/components/blocks/preview/references.vue'
import BlocksPreviewFeatures from '~/components/blocks/preview/features.vue'
import BlocksPreviewAuth from '~/components/blocks/preview/auth.vue'

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
        title: 'Section',
        to: '/blocks/section',
        component: BlocksPreviewSection,
      },
      {
        title: 'Features',
        to: '/blocks/features',
        component: BlocksPreviewFeatures,
      },
      {
        title: 'References',
        to: '/blocks/references',
        component: BlocksPreviewReferences,
      },
      // {
      //   title: 'About',
      //   to: '/blocks/about',
      //   component: BlocksPreviewPlaceholder,
      // },
      {
        title: 'Contact',
        to: '/blocks/contact',
        component: BlocksPreviewPlaceholder,
        image: '/img/previews/contact.png',
      },
    ],
  },
  {
    title: 'General',
    items: [
      {
        title: 'Auth',
        to: '/blocks/auth',
        component: BlocksPreviewAuth,
      },
      {
        title: 'Blog',
        to: '/blocks/blog',
        component: BlocksPreviewBlog,
      },
      {
        title: 'Header',
        to: '/blocks/header',
        component: BlocksPreviewPlaceholder,
        image: '/img/previews/header.png',
      },
      // {
      //   title: 'Footer',
      //   to: '/blocks/footer',
      //   component: BlocksPreviewPlaceholder,
      // },
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
      <div class="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-12">
        <NuxtLink v-for="item in category.items" class="flex h-full flex-col gap-2" :to="item.to">
          <UiCard v-if="item.image" class="flex aspect-[16/9] h-full items-center justify-center">
            <NuxtImg width="750" :src="item.image" />
          </UiCard>
          <component v-else :is="item.component" class="aspect-[16/9] h-full" />
          <UiTextTitle>{{ item.title }}</UiTextTitle>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
