<script setup lang="ts">
import type { Placement } from '@floating-ui/vue'

const props = withDefaults(
  defineProps<{
    label: string
    placement?: Placement
    offset?: number
  }>(),
  {
    placement: 'bottom',
    offset: 7,
  }
)

const [anchor, tooltip, floatingStyles] = useUiFloating(props.placement, props.offset)

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
    <div ref="anchor" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <slot name="activator">
        <UiButton>Hover me</UiButton>
      </slot>
    </div>
    <div v-if="open" :style="floatingStyles" ref="tooltip" class="px-2">
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
          class="left-0 top-0 max-w-[100vw] text-wrap rounded-lg bg-primary px-2 py-0.5 text-sm text-primary-contrast"
        >
          {{ props.label }}
        </div>
      </Transition>
    </div>
  </div>
</template>
