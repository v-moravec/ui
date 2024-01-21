<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>

<template>
  <div class="w-full max-w-sm">
    <Popover v-slot="{ open }" class="relative">
     <slot /> 
    </Popover>
  </div>
</template>
