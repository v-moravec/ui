<script setup lang="ts">
import type { UiCarouselEmits, UiCarouselProps, WithClassAsProps } from './interface'

const props = withDefaults(defineProps<UiCarouselProps & WithClassAsProps>(), {
  orientation: 'horizontal',
})

const emits = defineEmits<UiCarouselEmits>()

const carouselArgs = useProvideCarousel(props, emits)

function onKeyDown(event: KeyboardEvent) {
  const prevKey = props.orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft'
  const nextKey = props.orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight'

  if (event.key === prevKey) {
    event.preventDefault()
    carouselArgs.scrollPrev()

    return
  }

  if (event.key === nextKey) {
    event.preventDefault()
    carouselArgs.scrollNext()
  }
}
</script>

<template>
  <div
    :class="
      cn(
        'relative flex items-center justify-center',
        props.orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        props.class
      )
    "
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    @keydown="onKeyDown"
  >
    <slot />
  </div>
</template>
