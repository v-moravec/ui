<script setup lang="ts">
const { notifications } = useNotifications()
</script>

<template>
  <div class="fixed bottom-0 z-50 sm:right-0 sm:w-auto">
    <TransitionGroup
      moveClass="transition-all duration-100"
      enterActiveClass="transition-all duration-100"
      leaveActiveClass="transition-all duration-100 absolute -z-10"
      enterFromClass="opacity-0 translate-y-20"
      leaveToClass="opacity-0"
      tag="div"
      class="absolute bottom-0 right-0 w-full min-w-72 px-2 sm:bottom-3 sm:right-5 sm:w-auto sm:px-0"
    >
      <UiNotificationsNotification
        class="mb-2"
        :notification="notification"
        v-for="notification in notifications"
        :key="notification.id"
      />
    </TransitionGroup>
  </div>
</template>
