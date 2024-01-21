<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { useFuse } from '@vueuse/integrations/useFuse'

const inputRef = ref()
const open = ref(false)

watch(open, async () => {
  await nextTick()
  if (open.value) {
    inputRef.value?.focus()
  }
})

const { data: files } = await useFetch<ParsedContent[]>('/api/search.json')

if (!files.value) {
  files.value = []
}

const searchString = ref('')

const { results } = useFuse(searchString, files.value, {
  fuseOptions: {
    ignoreLocation: true,
    includeMatches: true,
    threshold: 0.1,
    keys: [
      { name: 'title', weight: 5 },
      { name: 'label', weight: 5 },
      { name: 'suffix', weight: 3 },
      'children.children.value',
      'children.children.children.value',
      'children.children.children.children.value',
      'children.children.children.children.children.value',
    ],
  },
  resultLimit: 12,
})

const options = computed(() => {
  return searchString.value.length > 0 ? results.value : files.value?.map((file) => ({ item: file }))
})
</script>

<template>
  <div>
    <button class="flex items-center justify-center">
      <Icon name="fa6-solid:magnifying-glass" class="size-4" @click="open = true" />
    </button>
    <UiModal class="w-full max-w-xl p-0" v-model="open">
      <div class="flex gap-2 border-b border-border p-2">
        <input
          ref="inputRef"
          v-model="searchString"
          type="text"
          placeholder="Enter your search query"
          class="w-full rounded-lg px-2 py-1 outline-none"
        />
        <button class="mx-2 flex items-center justify-center">
          <Icon name="fa6-solid:xmark" class="size-4" @click="open = false" />
        </button>
      </div>
      <div class="max-h-52 overflow-y-auto p-2">
        <p v-if="options?.length === 0" class="my-5 text-center">No results found</p>
        <NuxtLink
          @click="
            () => {
              open = false
              searchString = ''
            }
          "
          class="my-1 block last:mb-0"
          :to="result.item._path"
          v-for="result in options"
        >
          <UiButton type="accent" class="w-full px-2 text-left text-sm">
            {{ result.item.title }}
          </UiButton>
        </NuxtLink>
      </div>
    </UiModal>
  </div>
</template>
