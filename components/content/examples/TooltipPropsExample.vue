<script setup lang="ts">
import type { Placement } from '@floating-ui/vue'
import type { ComponentWithPropsProps } from '~/types/ui'

const label: Ref<string> = ref('This is a tooltip')
const offsetSize: Ref<number> = ref(7)

const placement: Ref<{ value: Placement; label: string }> = ref({
  value: 'bottom',
  label: 'Bottom',
})

const placementOptions: Ref<{ value: Placement; label: string }[]> = ref([
  { value: 'top', label: 'Top' },
  { value: 'right', label: 'Right' },
  { value: 'bottom', label: 'Bottom' },
  { value: 'left', label: 'Left' },
])

const props: Ref<ComponentWithPropsProps> = ref({
  componentName: 'UiTooltip',
  props: [
    {
      name: 'label',
      type: 'string',
      value: label,
    },
    {
      name: 'offsetSize',
      type: 'number',
      value: offsetSize,
    },
    {
      name: 'placement',
      type: 'option',
      value: placement,
      options: placementOptions,
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
      <ComponentWithProps componentName="UiSidebar" v-model="props" />
      <UiTooltip :key="offsetSize + placement.value" v-bind="bindProps">
        <UiButton>Hover me</UiButton>
      </UiTooltip>
    </div>
  </div>
</template>
