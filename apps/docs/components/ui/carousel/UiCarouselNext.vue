<script setup lang="ts">
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <button
    :disabled="!canScrollNext"
    :class="cn('p-2', { 'rotate-90': orientation === 'vertical' }, props.class)"
    @click="scrollNext"
  >
    <slot>
      <span class="group-disabled:bg-disabled flex items-center justify-center rounded-full bg-primary p-2">
        <Icon
          name="fa6-solid:arrow-right"
          class="group-disabled:text-disabled-contrast text-primary-contrast"
          size="20"
        />
      </span>
    </slot>
  </button>
</template>
