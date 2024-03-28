<script lang="ts" setup></script>

<template>
  <NuxtLink
    class="flex h-full w-fit items-center gap-1.5 text-nowrap text-lg font-bold"
    aria-label="Home"
    :to="{ path: '/' }"
  >
    <Logo class="h-[17.8px]" />
    <span>v-moravec/ui</span>
    <UiBadge class="-translate-x-1 -translate-y-2 scale-75">alpha</UiBadge>
  </NuxtLink>
</template>
