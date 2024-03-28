<script setup lang="ts">
import type { ComponentWithPropsProps } from '~/types/ui'

const { addNotification } = useNotifications()

const sizeOptions = [
  { value: 'sm', label: 'sm' },
  { value: 'md', label: 'md' },
  { value: 'lg', label: 'lg' },
]
const size: Ref<{ value: 'sm' | 'md' | 'lg'; label: string }> = ref({ value: 'md', label: 'md' })

const typeOptions = [
  { value: 'primary', label: 'primary' },
  { value: 'secondary', label: 'secondary' },
  { value: 'accent', label: 'accent' },
]
const type: Ref<{ value: string; label: string }> = ref({ value: 'primary', label: 'primary' })

const outlineOptions = [
  { value: true, label: 'true' },
  { value: false, label: 'false' },
]
const outline: Ref<{ value: boolean; label: string }> = ref({ value: false, label: 'false' })

const props: Ref<ComponentWithPropsProps> = ref({
  componentName: 'UiButton',
  props: [
    {
      name: 'type',
      type: 'option',
      value: type,
      options: typeOptions,
    },
    {
      name: 'outline',
      type: 'option',
      value: outline,
      options: outlineOptions,
    },
    {
      name: 'size',
      type: 'option',
      value: size,
      options: sizeOptions,
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
    <div class="flex flex-col items-center gap-3 sm:min-w-64">
      <ComponentWithProps component-name="UiButton" v-model="props" />
      <UiButton v-bind="bindProps" @click="addNotification({ title: 'Surprise', time: 1000 })">
        Click me
      </UiButton>
    </div>
  </div>
</template>
