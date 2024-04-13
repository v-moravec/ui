<script setup lang="ts">
const text = ref('Leave me here.')
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <div class="rounded-lg bg-primary px-4 py-2 text-primary-contrast">
      {{ text }}
    </div>
    <UiTextarea v-model="text" />
  </div>
</template>
