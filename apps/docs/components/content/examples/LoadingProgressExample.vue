<script setup lang="ts">
const interval = 2500

let remaining = ref(interval)

onMounted(() => {
  const { remaining: r, start } = useTimer(() => {
    start()
  }, interval)

  remaining = r
})
</script>

<template>
  <div class="w-full">
    <UiLoadingProgress :remaining="remaining" :interval="interval" />
  </div>
</template>
