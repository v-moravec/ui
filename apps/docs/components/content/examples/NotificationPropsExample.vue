<script setup lang="ts">
import type { ComponentWithPropsProps } from '~/types/ui'

const { addNotification } = useNotifications()

const title = ref('Hello world!')
const description = ref('This is a notification')
const time = ref(5000)

const props: Ref<ComponentWithPropsProps> = ref({
  componentName: 'UiNotifications',
  props: [
    {
      name: 'title',
      type: 'string',
      value: title,
    },
    {
      name: 'time',
      type: 'number',
      value: time,
    },
    {
      name: 'description',
      type: 'string',
      value: description,
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
      <UiButton class="justify-center text-sm" @click="addNotification({ title, description, time })">
        Add notification
      </UiButton>
    </div>
  </div>
</template>
