<script setup lang="ts">
import { Switch } from '@headlessui/vue'

const checked = ref(false)
</script>

<template>
  <Switch
    v-model="checked"
    :class="checked ? 'bg-primary' : 'border border-border bg-secondary'"
    class="relative inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
  >
    <span
      aria-hidden="true"
      :class="checked ? 'translate-x-[36px]' : 'translate-x-[4px]'"
      class="pointer-events-none inline-block size-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out"
    />
  </Switch>
</template>
