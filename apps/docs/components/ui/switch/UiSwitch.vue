<script setup lang="ts">
import { Switch } from '@headlessui/vue'

const checked = defineModel<boolean>()
</script>

<template>
  <Switch
    v-model="checked"
    :class="checked ? 'bg-primary' : 'border border-border bg-secondary'"
    class="relative inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
  >
    <span
      aria-hidden="true"
      :class="checked ? 'translate-x-[27px]' : 'translate-x-[3px]'"
      class="pointer-events-none inline-block size-[18px] transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out"
    />
  </Switch>
</template>
