<script setup lang="ts">
const text = ref('Leave me here.')
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <UiTextarea v-model="text" />
  </div>
</template>
