<script setup lang="ts">
useSeoMeta({
  title: 'Kickstart your project with ease',
  description: 'Flexible collection of reusable components and themes. Make it yours.',
})
</script>

<template>
  <div>
    <UiNotifications />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
pre {
  ::selection {
    @apply bg-white text-black;
  }
}
</style>
