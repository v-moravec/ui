<script setup lang="ts"></script>

<template>
  <UiCard class="max-w-md">
    <div class="flex flex-col gap-2">
      <UiTextNormal class="inline-block">
        Our website uses cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. By
        continuing to browse or by clicking "Accept", you agree to the storing of cookies on your device. To learn more
        about how we use cookies and manage your settings, please review our
        <NuxtLink to="#" class="inline underline">Cookie Policy</NuxtLink>
        <span>.</span>
      </UiTextNormal>
      <div class="flex gap-2">
        <UiButton @click="">Accept</UiButton>
        <UiButton type="secondary" @click="">Decline</UiButton>
      </div>
    </div>
  </UiCard>
</template>
