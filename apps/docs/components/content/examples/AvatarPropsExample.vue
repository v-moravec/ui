<script lang="ts" setup>
import type { ComponentWithPropsProps } from '~/types/ui'

const initials: Ref<string> = ref('VM')

const props: Ref<ComponentWithPropsProps> = ref({
  componentName: 'UiAvatar',
  props: [
    {
      name: 'initials',
      type: 'string',
      value: initials,
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
      <ComponentWithProps v-model="props" />
      <UiAvatar v-bind="bindProps" />
    </div>
  </div>
</template>
