<script setup lang="ts">
const links = [
  { label: 'Home', to: '#' },
  { label: 'About', to: '#' },
  { label: 'Contact', to: '#' },
]

const socialLinks = [
  { label: 'github', url: '' },
  { label: 'twitter', url: '' },
  { label: 'discord', url: '' },
]
</script>

<template>
  <footer class="w-full border-t border-border">
    <UiContainer class="py-10">
      <div class="mb-20 mt-10 flex flex-col justify-between gap-5 lg:flex-row">
        <div class="text-5xl font-bold">Logo</div>
        <div class="my-10 flex flex-wrap gap-10 lg:my-0">
          <div v-for="i in 4">
            <UiTextTitle>Useful links</UiTextTitle>
            <div class="flex flex-col">
              <NuxtLink v-for="link in links" :to="link.to">{{ link.label }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto mb-10 flex w-fit flex-col items-center gap-4">
        <UiTextTitle>Visit our social media</UiTextTitle>
        <div class="flex items-center gap-4">
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
      <UiTextNormal class="mx-auto w-fit">Copyright © {{ new Date().getFullYear() }}</UiTextNormal>
    </UiContainer>
  </footer>
</template>
