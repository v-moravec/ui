<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  clear?: boolean
  class?: HTMLAttributes['class']
}>()

const isOpen = defineModel<boolean>()

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}
</script>

<template>
  <div>
    <slot :open="openModal" name="activator">
      <UiButton @click="openModal">Open sidebar</UiButton>
    </slot>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div :class="{ 'bg-black/75': !props.clear }" class="fixed inset-0" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 -translate-x-full"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0 -translate-x-full"
            >
              <DialogPanel
                :class="
                  cn(
                    'w-full max-w-md transform overflow-hidden border border-border bg-background p-6 text-left align-middle shadow-xl transition-all',
                    props.class
                  )
                "
              >
                <slot :close="closeModal" />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
