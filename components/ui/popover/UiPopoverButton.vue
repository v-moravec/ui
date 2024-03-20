<script lang="ts" setup>
import { PopoverButton } from '@headlessui/vue'
</script>

<template>
  <PopoverButton as="span">
    <slot>
      <UiButton size="sm" type="primary">Open</UiButton>
    </slot>
  </PopoverButton>
</template>
