<script lang="ts" setup>
const { addNotification } = useNotifications()
</script>

<template>
  <div class="flex flex-col gap-2">
    <UiButton @click="addNotification({ title: 'Surprise', time: 2000 })">Click me</UiButton>
  </div>
</template>
