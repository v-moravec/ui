<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  type?: 'primary' | 'secondary' | 'accent'
  outline?: boolean
  size?: 'sm' | 'md' | 'lg'
  class?: HTMLAttributes['class']
}>()

const base = 'whitespace-nowrap rounded-lg flex justify-center items-center '
const outline = 'ring-1 ring-inset ring-border '
const primary = 'bg-primary hover:bg-primary/80 active:bg-primary/70 font-medium text-primary-contrast '
const secondary = 'bg-secondary hover:bg-secondary/80 active:bg-secondary/60 text-secondary-contrast font-medium '
const accent = 'hover:bg-neutral-100 active:bg-neutral-200 text-accent-contrast font-medium dark:hover:bg-neutral-800 '

const types = {
  primary: primary,
  secondary: secondary,
  accent: accent,
}

const sizes = {
  sm: 'px-2 py-1 rounded-md text-sm gap-1 ',
  md: 'px-5 py-2 text-base gap-2 ',
  lg: 'px-10 py-4 text-lg gap-3 ',
}

const cls = computed(
  () => `${base}${props.outline ? outline : ''}${types[props.type || 'primary']}${sizes[props.size || 'md']}`
)
</script>

<template>
  <button :class="cn(cls, props.class)">
    <slot />
  </button>
</template>
