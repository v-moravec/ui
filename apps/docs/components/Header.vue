<template>
  <div
    class="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/55 dark:text-white"
  >
    <div class="border-b border-border">
      <div class="container relative z-10 mx-auto flex h-16 max-h-16 items-center justify-between p-4">
        <div class="flex items-center gap-10">
          <div class="lg:hidden">
            <UiSidebar position="left">
              <template #default="{ close }">
                <div>
                  <div class="flex justify-between gap-2">
                    <FullLogo />
                    <button @click="close">
                      <Icon name="fa6-solid:xmark" class="size-4" />
                    </button>
                  </div>
                  <Navigation class="py-8 pr-2" />
                </div>
              </template>
              <template #activator="{ open }">
                <button @click="open" class="flex items-center justify-center">
                  <Icon name="fa6-solid:bars" class="size-4" />
                </button>
              </template>
            </UiSidebar>
          </div>
          <FullLogo />
          <div class="hidden items-center gap-2 md:flex">
            <NuxtLink v-for="link in docsLinks" :to="link.to">
              <UiButton type="accent" size="sm">{{ link.label }}</UiButton>
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <UiModal />
          <Search />
          <ThemeSwitch />
          <ColorModeButton />
          <div class="hidden items-center gap-4 md:flex">
            <NuxtLink target="_blank" v-for="(link, index) in links" :key="index" :to="link.url" external class="flex">
              <Icon :name="link.icon" size="20px" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showMenu = ref(false)

const docsLinks = [
  {
    to: '/docs/getting-started/introduction',
    label: 'Docs',
  },
  {
    to: '/blocks',
    label: 'Blocks',
  },
  // {
  //   to: '/theming',
  //   label: 'Theming',
  // },
]

const links = [
  {
    icon: 'fa6-brands:github',
    url: 'https://github.com/v-moravec',
  },
  {
    icon: 'fa6-brands:linkedin',
    url: 'https://linkedin.com/in/v-moravec',
  },
]
</script>
