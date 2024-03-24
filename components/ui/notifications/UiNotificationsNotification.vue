<script setup lang="ts">
import type { Notification } from '~/composables/useNotifications'

const props = defineProps<{
  notification: Notification
}>()

const { removeNotification, notifications } = useNotifications()

const interval = props.notification.time || 5000

const { remaining, pause, resume } = useTimer(() => {
  if (props.notification.time) {
    removeNotification(props.notification.id)
  }
}, interval)
</script>

<template>
  <UiCard class="w-full p-3 sm:w-auto sm:min-w-72" @mouseover="pause()" @mouseleave="resume()">
    <div class="flex justify-between items-center gap-4">
      <div class="flex flex-col overflow-hidden">
        <p class="truncate font-semibold leading-tight">{{ props.notification.title }}</p>
        <p v-if="props.notification.description" class="text-current/60 truncate text-sm">
          {{ props.notification.description }}
        </p>
      </div>

      <UiButton
        @click="removeNotification(props.notification.id)"
        icon="fa6-solid:xmark"
        size="sm"
        class="flex h-max items-start justify-start p-1"
        type="accent"
      ></UiButton>
    </div>
    <span
      v-if="props.notification.time"
      id="timeoutBar"
      :style="{ width: (remaining / interval) * 100 + '%' }"
      class="mt-2 block h-1 w-full rounded-full bg-primary"
    ></span>
  </UiCard>
</template>
