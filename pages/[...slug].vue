<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
})

defineOgImageComponent('Docs', {
  title: page.value.title,
  description: page.value.description,
})

const tocLinks = page.value.body?.toc?.links ?? []

const links = page.value.links ?? []

definePageMeta({
  layout: 'docs',
})
</script>

<template>
  <main class="w-full">
    <div class="flex max-w-5xl py-4 lg:gap-8 lg:py-8">
      <div class="mx-auto w-full max-w-3xl xl:col-span-8">
        <PageHeader :title="page?.title" :description="page?.description" :links="links" />
        <ContentRenderer v-if="page?.body" :value="page" class="prose prose-neutral max-w-3xl dark:prose-invert" />
      </div>
      <div class="hidden lg:col-span-2 xl:block">
        <div class="top-24 flex flex-col lg:sticky">
          <NuxtLink
            v-for="(link, index) in tocLinks"
            :key="index"
            :to="{ path: page?._path, hash: '#' + link.id }"
            class="text-sm text-neutral-500"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
