<script lang="ts" setup>
const { addNotification } = useNotifications()

const title = ref('Hello world!')
const description = ref('This is a notification')
const time = ref(2000)
</script>

<template>
  <div class="flex flex-col gap-2">
    <UiCard class="flex flex-col gap-3 p-5 sm:min-w-64">
      <div>
        <p class="mb-0.5 text-sm">Title</p>
        <UiInput v-model="title" />
      </div>
      <div>
        <p class="mb-0.5 text-sm">Description</p>
        <UiInput v-model="description" />
      </div>
      <div>
        <p class="mb-0.5 text-sm">Time</p>
        <UiInput type="number" v-model="time" />
      </div>
      <UiButton class="justify-center text-sm" @click="addNotification({ title, description, time })" outline>
        Add notification
      </UiButton>
    </UiCard>
  </div>
</template>
