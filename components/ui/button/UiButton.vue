<script setup lang="ts">
const props = defineProps<{
  icon?: string
  to?: string
  type?: 'primary' | 'secondary' | 'accent'
  outline?: boolean
  size?: 'sm' | 'md' | 'lg'
}>()

const base = 'whitespace-nowrap rounded-lg '
const outline = 'border border-border '
const primary = 'bg-primary hover:bg-primary/80 font-medium text-primary-contrast '
const secondary = 'bg-secondary hover:bg-secondary/80 text-secondary-contrast font-medium '
const accent = 'hover:bg-neutral-100 text-accent-contrast font-medium dark:hover:bg-neutral-800 '

const cls = computed(() => {
  let clsTmp = base

  if (props.outline) {
    clsTmp += outline
  }

  switch (props.type) {
    case 'primary':
      clsTmp += primary
      break
    case 'secondary':
      clsTmp += secondary
      break
    case 'accent':
      clsTmp += accent
      break
    default:
      clsTmp += primary
      break
  }

  switch (props.size) {
    case 'sm':
      clsTmp += 'px-2 py-1 rounded-md text-sm '
      break
    case 'md':
      clsTmp += 'px-5 py-2.5 text-base '
      break
    case 'lg':
      clsTmp += 'px-10 py-4 text-lg '
      break
    default:
      clsTmp += 'px-10 py-2.5 text-base '
  }

  return clsTmp
})
</script>

<template>
  <button :class="cls">
    <Icon v-if="props.icon" :name="props.icon" class="roun mr-1.5 h-4 w-4 2xl:mr-3 2xl:h-6 2xl:w-6" />

    <slot />
  </button>
</template>
