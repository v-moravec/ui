<script setup lang="ts">
import type { ComponentWithPropsProps } from '~/types/ui'

const scrollInsideOptions = [
  { value: true, label: 'true' },
  { value: false, label: 'false' },
]
const scrollInside: Ref<{ value: boolean; label: string }> = ref({ value: false, label: 'false' })

const props: Ref<ComponentWithPropsProps> = ref({
  componentName: 'UiDialog',
  props: [
    {
      name: 'scroll-inside',
      type: 'option',
      value: scrollInside,
      options: scrollInsideOptions,
    },
  ],
})

const bindProps = computed(() => {
  const arr = props.value.props.map((prop) => ({ [prop.name]: prop.type === 'option' ? prop.value.value : prop.value }))
  return Object.assign({}, ...arr)
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-3 sm:min-w-64">
      <ComponentWithProps v-model="props" />
      <UiDialog v-bind="bindProps">
        <template #activator="{ open }">
          <UiButton size="sm" @click="open">Open dialog</UiButton>
        </template>
        <template #default="{ close }">
          <div>
            <div class="flex justify-end">
              <UiButton class="p-1" type="accent" @click="close">
                <Icon name="fa6-solid:xmark" class="w-4 h-4" />
              </UiButton>
            </div>
            <div class="h-[2000px]" />
          </div>
        </template>
      </UiDialog>
    </div>
  </div>
</template>
