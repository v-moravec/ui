<script setup lang="ts">
import type { Placement } from '@floating-ui/vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    placement?: Placement
    offsetSize?: number
  }>(),
  {
    placement: 'bottom',
    offsetSize: 7,
  }
)

const { anchor, floating, floatingStyles } = useUiFloating({ placement: props.placement, offsetSize: props.offsetSize })
</script>

<template>
  <Popover class="relative">
    <PopoverButton ref="anchor" as="button" class="flex outline-none">
      <slot name="activator">
        <UiButton size="md" type="primary">Open</UiButton>
      </slot>
    </PopoverButton>
    <div ref="floating" class="max-w-[100vw] px-2" :style="floatingStyles">
      <Transition
        appear
        enterActiveClass="motion-safe:transition duration-300"
        enterFromClass="opacity-0 translate-y-1"
        enterToClass="opacity-100 translate-y-0"
        leaveActiveClass="motion-safe:transition duration-200"
        leaveFromClass="opacity-100 translate-y-0"
        leaveToClass="opacity-0 translate-y-1"
      >
        <PopoverPanel class="z-10 mt-3 overflow-hidden rounded-lg border border-border bg-background p-4">
          <slot></slot>
        </PopoverPanel>
      </Transition>
    </div>
  </Popover>
</template>
