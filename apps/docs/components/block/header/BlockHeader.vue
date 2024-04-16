<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Blocks', to: '/blocks' },
  { label: 'Docs', to: '/docs/getting-started/introduction' },
]

const socialLinks = [
  { label: 'github', url: '' },
  { label: 'twitter', url: '' },
  { label: 'discord', url: '' },
]
</script>

<template>
  <div
    class="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/55 dark:text-white"
  >
    <div class="border-b border-border">
      <div class="container relative z-10 mx-auto flex h-16 max-h-16 items-center justify-between p-4">
        <div class="flex items-center gap-10">
          <FullLogo />
          <div class="hidden items-center gap-2 lg:flex">
            <NuxtLink v-for="link in links" :to="link.to">
              <UiButton type="accent" size="sm">{{ link.label }}</UiButton>
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <ColorModeButton />
          <div class="hidden items-center gap-4 md:flex">
            <NuxtLink
              target="_blank"
              v-for="(link, index) in socialLinks"
              :key="index"
              :to="link.url"
              external
              class="flex"
            >
              <Icon :name="'fa-brands:' + link.label.toLowerCase()" class="size-6" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
