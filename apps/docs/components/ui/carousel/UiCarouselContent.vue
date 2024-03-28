<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { useCarousel } from './useCarousel'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<WithClassAsProps>()

const { carouselRef, orientation } = useCarousel()
</script>

<template>
  <div ref="carouselRef" class="overflow-hidden rounded-lg">
    <div :class="cn('flex', orientation === 'horizontal' ? '' : 'flex-col', props.class)">
      <slot />
    </div>
  </div>
</template>
