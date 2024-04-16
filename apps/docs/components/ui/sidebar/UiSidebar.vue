<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    position?: 'left' | 'right' | 'bottom'
    class?: string
    showOverlay?: boolean
    preventClose?: boolean
  }>(),
  {
    position: 'right',
    showOverlay: true,
    preventClose: false,
  }
)

const isOpen = defineModel<boolean>()

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}

const enterFromLeaveTo = {
  left: 'opacity-0 -translate-x-full',
  right: 'opacity-0 translate-x-full',
  bottom: 'opacity-0 translate-y-full scale-50',
}

const panelClass = {
  left: 'relative flex h-full w-screen max-w-md flex-1 flex-col overflow-y-auto bg-background border-r border-border',
  right:
    'relative ml-auto flex h-full w-screen max-w-md flex-1 flex-col overflow-y-auto bg-background border-l border-border',
  bottom:
    'relative top-1/2 mx-2 sm:mx-10 flex w-screen h-1/2 flex-1 flex-col overflow-hidden rounded-t-lg bg-background border-t border-x border-border',
}
</script>

<template>
  <slot :open="openModal" name="activator">
    <UiButton @click="openModal">Open sidebar</UiButton>
  </slot>
  <Teleport to="body">
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="!preventClose && closeModal()" class="fixed inset-0 z-50 flex overflow-hidden">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div v-show="props.showOverlay" class="fixed inset-0 bg-black/75" />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="transition duration-300 ease-out"
          :enter-from="enterFromLeaveTo[props.position]"
          enter-to="opacity-100 scale-100"
          leave="transition duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          :leave-to="enterFromLeaveTo[props.position]"
        >
          <DialogPanel :class="cn(panelClass[props.position], props.class)">
            <div class="overflow-auto p-6">
              <slot :close="closeModal" />
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </Teleport>
</template>
