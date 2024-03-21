<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const [anchor, floating, floatingStyles] = useUiFloating('bottom')
</script>

<template>
  <div class="w-full max-w-sm">
    <Popover class="relative">
      <PopoverButton ref="anchor" as="span">
        <slot name="activator">
          <UiButton size="md" type="primary">Open</UiButton>
        </slot>
      </PopoverButton>
      <div ref="floating" :style="floatingStyles">
        <Transition
          appear
          enterActiveClass="motion-safe:transition duration-300"
          enterFromClass="opacity-0 translate-y-1"
          enterToClass="opacity-100 translate-y-0"
          leaveActiveClass="motion-safe:transition duration-200"
          leaveFromClass="opacity-100 translate-y-0"
          leaveToClass="opacity-0 translate-y-1"
        >
          <PopoverPanel
            class="z-10 mt-3 max-w-[100vw] overflow-hidden rounded-lg border border-border bg-background p-4"
          >
            <slot></slot>
          </PopoverPanel>
        </Transition>
      </div>
    </Popover>
  </div>
</template>
