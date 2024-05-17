<script lang="ts" setup>
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const route = useRoute()

const nav = await fetchContentNavigation()

const navigationItems = computed(() => {
  return nav
    .map((item) => item.children)
    .flat()
    .filter((item): item is NavItem => !!item)
})

const items = navigationItems.value.map((item) => {
  if (item.title === 'Blocks') {
    const path = '/blocks'

    const blocks = [
      { title: 'Hero', _path: '/hero' },
      { title: 'Section', _path: '/section' },
      { title: 'Features', _path: '/features' },
      { title: 'References', _path: '/references' },
      { title: 'Contact', _path: '/contact' },
      { title: 'Auth', _path: '/auth' },
      { title: 'Blog', _path: '/blog' },
      { title: 'Cookies', _path: '/cookies' },
      { title: 'Header', _path: '/header' },
      { title: 'Footer', _path: '/footer' },
    ]

    blocks.forEach((block) => {
      item.children?.push({
        title: block.title,
        _path: path + block._path,
      })
    })
  }

  return item
})
</script>

<template>
  <div>
    <NavigationItem
      v-for="(navigationItem, index) in items"
      :key="index"
      :title="navigationItem.title"
      :links="navigationItem.children ?? []"
    />
  </div>
</template>
