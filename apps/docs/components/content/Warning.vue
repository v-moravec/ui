<script setup lang="ts"></script>

<template>
  <UiCard class="not-prose flex items-center border-border bg-secondary p-3 text-secondary-contrast">
    <span
      class="ml-1 mr-4 flex aspect-square items-center justify-center rounded-lg bg-primary p-2.5 text-primary-contrast"
    >
      <Icon name="fa6-solid:exclamation" class="size-6" />
    </span>
    <ContentSlot />
  </UiCard>
</template>
