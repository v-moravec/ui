<script setup lang="ts">
import type { ComponentWithPropsProps } from '~/types/ui'

const positionOptions = [
  { value: 'left', label: 'left' },
  { value: 'right', label: 'right' },
  { value: 'bottom', label: 'bottom' },
]
const position: Ref<{ value: 'left' | 'right' | 'bottom'; label: string }> = ref({ value: 'left', label: 'left' })

const showOverlayOptions = [
  { value: true, label: 'true' },
  { value: false, label: 'false' },
]
const showOverlay: Ref<{ value: boolean; label: string }> = ref({ value: true, label: 'true' })

const preventCloseOptions = [
  { value: true, label: 'true' },
  { value: false, label: 'false' },
]
const preventClose: Ref<{ value: boolean; label: string }> = ref({ value: false, label: 'false' })

const props: Ref<ComponentWithPropsProps> = ref({
  componentName: 'UiSidebar',
  props: [
    {
      name: 'position',
      type: 'option',
      value: position,
      options: positionOptions,
    },
    {
      name: 'show-overlay',
      type: 'option',
      value: showOverlay,
      options: showOverlayOptions,
    },
    {
      name: 'prevent-close',
      type: 'option',
      value: preventClose,
      options: preventCloseOptions,
    },
  ],
})

const bindProps = computed(() => {
  const arr = props.value.props.map((prop) => ({ [prop.name]: prop.value.value }))
  return Object.assign({}, ...arr)
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-3 sm:min-w-64">
      <ComponentWithProps v-model="props" />
      <UiSidebar v-bind="bindProps">
        <template #activator="{ open }">
          <UiButton size="sm" @click="open">Open sidebar</UiButton>
        </template>
        <template #default="{ close }">
          <div class="mb-5">
            <div class="flex justify-end">
              <UiButton class="p-1" type="accent" icon="fa6-solid:xmark" @click="close"></UiButton>
            </div>
          </div>
        </template>
      </UiSidebar>
    </div>
  </div>
</template>
