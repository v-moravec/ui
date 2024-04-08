<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    items: { label: string; content: string }[]
    multipleOpen?: boolean
    animateOpen?: boolean
  }>(),
  {
    multipleOpen: false,
    animateOpen: true,
  }
)

const buttonRefs = ref<Function[]>([])

function closeOthers(itemIndex: number) {
  if (props.multipleOpen) return

  buttonRefs.value.forEach((close, index) => {
    if (index === itemIndex) return

    close()
  })
}

function onEnter(el: HTMLElement, done: () => void) {
  if (!props.animateOpen) return done()
  el.style.height = '0'
  el.offsetHeight // Trigger a reflow, flushing the CSS changes
  el.style.height = el.scrollHeight + 'px'

  el.addEventListener('transitionend', done, { once: true })
}

function onBeforeLeave(el: HTMLElement) {
  if (!props.animateOpen) return
  el.style.height = el.scrollHeight + 'px'
  el.offsetHeight // Trigger a reflow, flushing the CSS changes
}

function onAfterEnter(el: HTMLElement) {
  if (!props.animateOpen) return
  el.style.height = 'auto'
}

function onLeave(el: HTMLElement, done: () => void) {
  if (!props.animateOpen) return done()
  el.style.height = '0'

  el.addEventListener('transitionend', done, { once: true })
}
</script>

<template>
  <Disclosure v-for="(item, index) in props.items" v-slot="{ open, close }" as="div" class="rounded-2xl transition-all">
    <DisclosureButton
      :ref="() => (buttonRefs[index] = close)"
      @click="closeOthers(index)"
      class="flex w-full items-center justify-between gap-2 rounded-lg px-4 py-2 text-left hover:bg-secondary hover:text-secondary-contrast focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75"
    >
      <span class="text-lg">{{ item.label }}</span>
      <Icon name="fa6-solid:chevron-down" :class="open ? 'rotate-180 transform' : ''" class="size-4" />
    </DisclosureButton>

    <Transition
      enter-active-class="overflow-hidden transition-[height] duration-200 ease-out"
      leave-active-class="overflow-hidden transition-[height] duration-200 ease-out"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
    >
      <div v-if="open">
        <DisclosurePanel class="min-h-full px-4 py-4">
          {{ item.content }}
        </DisclosurePanel>
      </div>
    </Transition>
  </Disclosure>
</template>
