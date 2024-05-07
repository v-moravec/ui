<script setup lang="ts">
import type { Placement, Strategy } from '@floating-ui/vue'

const props = withDefaults(
  defineProps<{
    label: string
    placement?: Placement
    strategy?: Strategy
    offsetSize?: number
    class?: string
  }>(),
  {
    placement: 'bottom',
    strategy: 'absolute',
    offsetSize: 7,
  }
)

const {
  anchor,
  floating: tooltip,
  floatingStyles,
} = useUiFloating({ placement: props.placement, offsetSize: props.offsetSize, strategy: props.strategy })

const open = ref(false)

function onMouseEnter() {
  open.value = true
}

function onMouseLeave() {
  open.value = false
}
</script>

<template>
  <div>
    <div ref="anchor" class="w-fit" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <slot>
        <UiButton>Hover me</UiButton>
      </slot>
    </div>
    <div v-if="open" :style="floatingStyles" ref="tooltip" :class="cn('px-2 z-10 max-w-md', props.class)">
      <Transition
        appear
        enterActiveClass="motion-safe:transition duration-300"
        enterFromClass="opacity-0 translate-y-1"
        enterToClass="opacity-100 translate-y-0"
        leaveActiveClass="motion-safe:transition duration-200"
        leaveFromClass="opacity-100 translate-y-0"
        leaveToClass="opacity-0 translate-y-1"
      >
        <div
          class="left-0 top-0 max-w-[100vw] text-wrap rounded-lg bg-primary px-2 py-1 text-sm text-primary-contrast"
        >
          {{ props.label }}
        </div>
      </Transition>
    </div>
  </div>
</template>
