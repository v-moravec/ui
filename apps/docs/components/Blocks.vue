<script setup lang="ts">
import BlocksPreviewHero from '~/components/blocks/preview/hero.vue'
import BlocksPreviewPlaceholder from '~/components/blocks/preview/placeholder.vue'
import BlocksPreviewBlog from '~/components/blocks/preview/blog.vue'
import BlocksPreviewSection from '~/components/blocks/preview/section.vue'
import BlocksPreviewReferences from '~/components/blocks/preview/references.vue'
import BlocksPreviewFeatures from '~/components/blocks/preview/features.vue'
import BlocksPreviewAuth from '~/components/blocks/preview/auth.vue'

const Usage = {
  SINGLE_USE: 'single-use',
  REUSABLE: 'reusable',
} as const

const categories = [
  {
    title: 'Landing',
    items: [
      {
        title: 'Hero',
        to: '/blocks/hero',
        component: BlocksPreviewHero,
        usage: Usage.SINGLE_USE,
      },
      {
        title: 'Section',
        to: '/blocks/section',
        component: BlocksPreviewSection,
        usage: Usage.REUSABLE,
      },
      {
        title: 'Features',
        to: '/blocks/features',
        component: BlocksPreviewFeatures,
        usage: Usage.REUSABLE,
      },
      {
        title: 'References',
        to: '/blocks/references',
        component: BlocksPreviewReferences,
        usage: Usage.REUSABLE,
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
        usage: Usage.SINGLE_USE,
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
        usage: Usage.REUSABLE,
      },
      {
        title: 'Blog',
        to: '/blocks/blog',
        component: BlocksPreviewBlog,
        usage: Usage.REUSABLE,
      },
      {
        title: 'Cookies',
        to: '/blocks/cookies',
        component: BlocksPreviewPlaceholder,
        image: '/img/previews/cookies.png',
        usage: Usage.SINGLE_USE,
      },
      {
        title: 'Header',
        to: '/blocks/header',
        component: BlocksPreviewPlaceholder,
        image: '/img/previews/header.png',
        usage: Usage.SINGLE_USE,
      },
      {
        title: 'Footer',
        to: '/blocks/footer',
        component: BlocksPreviewPlaceholder,
        image: '/img/previews/footer.png',
        usage: Usage.SINGLE_USE,
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
    <NuxtLink class="mx-auto block w-fit" to="/docs/blocks/introduction">
      <UiButton size="sm">✨ Read more about blocks ✨</UiButton>
    </NuxtLink>
    <BlockSectionLeft :title="category.title" v-for="category in categories" class="my-5">
      <div class="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-12">
        <NuxtLink v-for="item in category.items" class="flex h-full flex-col" :to="item.to">
          <UiCard
            v-if="item.image"
            class="flex aspect-[16/9] h-full items-center justify-center rounded-b-none border-b-0"
          >
            <NuxtImg width="750" :src="item.image" />
          </UiCard>
          <component v-else :is="item.component" class="aspect-[16/9] h-full rounded-b-none border-b-0" />
          <div
            class="flex items-center justify-between gap-2 rounded-lg rounded-t-none border border-border bg-secondary/40 px-5 py-3"
          >
            <UiTextTitle>{{ item.title }}</UiTextTitle>
            <UiTooltip
              :label="
                item.usage === Usage.SINGLE_USE
                  ? 'For unique sections of your project that require specific, tailored designs, our customizable single-use blocks are ideal. These blocks are designed for areas of your application that need a distinctive look or functionality, which you\'ll likely incorporate just once. They provide a strong foundation but are meant to be heavily modified to fit the particular demands and branding of your project, making each implementation unique.'
                  : 'Our reusable blocks are crafted for efficiency and versatility, perfect for frequent use across various parts of your application. These components utilize props and slots to accept different inputs and content, allowing for extensive reuse without redundancy. By leveraging these adaptable blocks, developers can maintain a consistent look and feel while customizing details to fit specific needs, making them invaluable for creating a cohesive user experience throughout an application.'
              "
            >
              <UiBadge class="block first-letter:uppercase">{{ item.usage }}</UiBadge>
            </UiTooltip>
          </div>
        </NuxtLink>
      </div>
    </BlockSectionLeft>
  </main>
</template>
