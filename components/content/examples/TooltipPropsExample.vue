<script setup lang="ts">
import type { ComponentWithPropsProps } from '~/types/ui'

const label: Ref<string> = ref('This is a tooltip')

const props: Ref<ComponentWithPropsProps> = ref({
  componentName: 'UiTooltip',
  props: [
    {
      name: 'label',
      type: 'string',
      value: label,
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
      <ComponentWithProps componentName="UiSidebar" v-model="props" />
      <UiTooltip v-bind="bindProps">
        <UiButton>Hover me</UiButton>
      </UiTooltip>
    </div>
  </div>
</template>
