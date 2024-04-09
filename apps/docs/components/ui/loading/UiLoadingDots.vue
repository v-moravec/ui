<script setup lang="ts"></script>

<template>
  <div>
    <span class="sr-only">Loading...</span>
    <div class="loader relative size-3 rounded-full bg-primary shadow-[1.5rem_0_-1.5rem_0_rgb(255,255,255)]" />
  </div>
</template>

<style scoped>
.loader {
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: #0009;
    box-shadow:
      1.5rem 0 #0009,
      -1.5rem 0 #000;
  }
  50% {
    background-color: #000;
    box-shadow:
      1.5rem 0 #0009,
      -1.5rem 0 #0009;
  }
  100% {
    background-color: #0009;
    box-shadow:
      1.5rem 0 #000,
      -1.5rem 0 #0009;
  }
}
</style>
