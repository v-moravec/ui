<script setup lang="ts">
const blocks = [
  {
    title: 'Login form',
    name: 'LoginForm',
    component: defineAsyncComponent(() => import('~/components/content/blocks/LoginForm.vue')),
  },
]
</script>

<template>
  <BlocksPage :blocks="blocks" title="Auth" installationName="auth" />
</template>
