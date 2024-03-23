<script lang="ts" setup></script>

<template>
  <div class="flex flex-col gap-2">
    <UiNotificationsNotification
      :notification="{
        title: 'Hello world!',
        description: 'This is a notification',
        time: 0,
      }"
    />
  </div>
</template>
