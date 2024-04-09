<script setup lang="ts">
const interval = 2500
const { remaining, start } = useTimer(() => {
  start()
}, interval)
</script>

<template>
  <div class="w-full">
    <UiLoadingProgress :remaining="remaining" :interval="interval" />
  </div>
</template>
