<script setup lang="ts">
const props = defineProps<{
  references: { message: string; name: string; avatar?: string }[]
}>()
</script>

<template>
  <div class="@container">
    <div class="columns-1 gap-8 @2xl:columns-2 @5xl:columns-3">
      <UiCard
        class="relative mt-3 flex h-fit break-inside-avoid flex-col gap-4 first-of-type:mt-0 hover:bg-secondary hover:text-secondary-contrast @2xl:mt-5"
        v-for="reference in references"
      >
        <UiTextTitle>{{ reference.message }}</UiTextTitle>
        <div class="flex items-center gap-3">
          <UiAvatar v-if="reference.avatar" :image-url="reference.avatar" class="h-12 w-12" />
          <UiTextNormal>{{ reference.name }}</UiTextNormal>
        </div>
      </UiCard>
    </div>
  </div>
</template>
