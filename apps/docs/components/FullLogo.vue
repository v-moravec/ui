<script lang="ts" setup></script>

<template>
  <NuxtLink
    class="flex h-full w-fit items-center gap-1.5 text-nowrap text-lg font-bold"
    aria-label="Home"
    :to="{ path: '/' }"
  >
    <Logo class="h-[17.8px]" />
    <span class="hidden sm:block">v-moravec/ui</span>
    <UiBadge class="-translate-x-1 -translate-y-2 scale-75">beta</UiBadge>
  </NuxtLink>
</template>
