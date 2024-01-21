<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <ClientOnly>
    <button class="flex">
      <Icon
        :name="isDark ? 'heroicons:moon-20-solid' : 'heroicons:sun-20-solid'"
        class="h-5 w-5"
        @click="isDark = !isDark"
      />
    </button>

    <template #fallback>
      <div class="h-6 w-6" />
    </template>
  </ClientOnly>
</template>
