<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const props = defineProps<{
  title: string
  links: { _path: string; title: string }[]
}>()
</script>

<template>
  <div class="w-full">
    <div class="mx-auto w-full max-w-md rounded-2xl">
      <Disclosure v-slot="{ open }" :default-open="true">
        <DisclosureButton
          class="z-10 flex w-full justify-between rounded-lg py-2 text-left text-sm font-medium text-black dark:text-white"
        >
          <span class="text-sm/6">{{ props.title }}</span>
          <Icon
            size="16px"
            name="fa6-solid:chevron-down"
            :class="open ? 'rotate-180 transform' : ''"
            class="text-black dark:text-white"
          />
        </DisclosureButton>
        <DisclosurePanel class="flex flex-col gap-2 py-1 text-sm text-neutral-500 dark:text-neutral-400">
          <NuxtLink
            active-class="text-neutral-900 underline dark:text-white"
            class="hover:underline"
            v-for="(link, index) in links"
            :key="index"
            :to="link._path"
          >
            {{ link.title }}
          </NuxtLink>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>
