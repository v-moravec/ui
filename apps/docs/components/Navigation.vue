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
</script>

<template>
  <div>
    <NavigationItem
      v-for="(navigationItem, index) in navigationItems"
      :key="index"
      :title="navigationItem.title"
      :links="navigationItem.children ?? []"
    />
  </div>
</template>
