<script setup lang="ts">
import type { Notification } from '~/composables/useNotifications'

const props = defineProps<{
  notification: Notification
}>()

const { removeNotification } = useNotifications()

const interval = props.notification.time || 5000

let remaining: ComputedRef<number>
let pause: () => void
let resume: () => void

if (props.notification.time) {
  const {
    remaining: r,
    pause: p,
    resume: rs,
  } = useTimer(() => {
    removeNotification(props.notification.id)
  }, interval)

  remaining = r
  pause = p
  resume = rs
}
</script>

<template>
  <UiCard class="w-full p-3 sm:w-auto sm:min-w-72" @mouseover="pause()" @mouseleave="resume()">
    <div class="flex items-center justify-between gap-4">
      <div class="flex flex-col overflow-hidden">
        <p class="truncate font-semibold leading-tight">{{ props.notification.title }}</p>
        <p v-if="props.notification.description" class="text-current/60 truncate text-sm">
          {{ props.notification.description }}
        </p>
      </div>

      <UiButton
        @click="removeNotification(props.notification.id)"
        size="sm"
        class="flex h-max items-start justify-start p-1"
        type="accent"
      >
        <Icon name="fa6-solid:xmark" class="h-4 w-4" />
      </UiButton>
    </div>
    <span
      v-if="props.notification.time || props.notification.color"
      id="timeoutBar"
      :style="{ width: (remaining / interval) * 100 + '%', backgroundColor: props.notification.color }"
      class="mt-2 block h-1 w-full rounded-full bg-primary"
    ></span>
  </UiCard>
</template>
