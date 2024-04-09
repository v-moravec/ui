<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'
import { onKeyStroke } from '@vueuse/core'

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

// https://github.com/nuxt/ui/blob/dev/docs/pages/%5B...slug%5D.vue#L53-L66

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryContent()
    .where({
      _extension: 'md',
      navigation: {
        $ne: false,
      },
    })
    .only(['title', 'description', '_path'])
    .findSurround(withoutTrailingSlash(route.path))
})

onKeyStroke('ArrowLeft', (e) => {
  e.preventDefault()
  if (surround.value && surround.value[0] && surround.value[0]._path) {
    navigateTo(surround.value[0]._path)
  }
})

onKeyStroke('ArrowRight', (e) => {
  e.preventDefault()
  if (surround.value && surround.value[1] && surround.value[1]._path) {
    navigateTo(surround.value[1]._path)
  }
})

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
        <hr class="my-10" />
        <div v-if="surround" class="flex items-stretch justify-between gap-5">
          <div class="max-w-xs">
            <UiTooltip v-if="surround[0] && surround[0]._path" placement="top" :offset-size="10" label="You can use arrows to navigate">
              <NuxtLink :to="{ path: surround[0]._path }">
                <UiCard class="flex h-full items-center gap-4 p-4">
                  <span class="flex size-fit rounded bg-primary p-2 text-primary-contrast">
                    <Icon name="fa6-solid:arrow-left" />
                  </span>
                  <div class="flex flex-col gap-0.5">
                    <p class="font-medium">
                      {{ surround[0].title }}
                    </p>
                    <p class="text-sm">
                      {{ surround[0].description }}
                    </p>
                  </div>
                </UiCard>
              </NuxtLink>
            </UiTooltip>
          </div>
          <div class="max-w-xs">
            <UiTooltip v-if="surround[1] && surround[1]._path" placement="top" :offset-size="10" label="You can use arrows to navigate">
              <NuxtLink :to="{ path: surround[1]._path }">
                <UiCard class="flex h-full items-center gap-4 p-4">
                  <div class="flex flex-col gap-0.5">
                    <p class="font-medium">
                      {{ surround[1].title }}
                    </p>
                    <p class="text-sm">
                      {{ surround[1].description }}
                    </p>
                  </div>
                  <span class="flex size-fit rounded bg-primary p-2 text-primary-contrast">
                    <Icon name="fa6-solid:arrow-right" />
                  </span>
                </UiCard>
              </NuxtLink>
            </UiTooltip>
          </div>
        </div>
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
