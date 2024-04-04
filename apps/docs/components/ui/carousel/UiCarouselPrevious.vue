<script setup lang="ts">
import type { WithClassAsProps } from './interface'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <button
    :disabled="!canScrollPrev"
    :class="cn('p-2', { 'rotate-90': orientation === 'vertical' }, props.class)"
    @click="scrollPrev"
  >
    <slot>
      <span class="flex items-center justify-center rounded-full bg-primary p-2 group-disabled:bg-disabled">
        <Icon
          name="fa6-solid:arrow-left"
          class="text-primary-contrast group-disabled:text-disabled-contrast"
          size="20"
        />
      </span>
    </slot>
  </button>
</template>
