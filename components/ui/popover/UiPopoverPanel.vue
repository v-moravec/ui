<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>

<template>
  <div>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        ref="popoverPanelRef"
        class="absolute left-1/2 z-10 mt-3 -translate-x-1/2 transform overflow-hidden rounded-lg border border-border bg-background p-4"
      >
        <slot />
      </PopoverPanel>
    </transition>
  </div>
</template>
