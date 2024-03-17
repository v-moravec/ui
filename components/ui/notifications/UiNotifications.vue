<script setup lang="ts">
const { notifications } = useNotifications()
</script>

<template>
  <div
    class="absolute bottom-0 z-50 flex max-h-dvh w-full max-w-full flex-col gap-2 overflow-y-auto px-2 sm:bottom-5 sm:right-5 sm:w-auto sm:px-0"
  >
    <UiNotificationsNotification
      :notification="notification"
      v-for="notification in notifications"
      :key="notification.id"
    />
  </div>
</template>
