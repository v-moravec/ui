<script setup lang="ts">
const items = [{ label: 'Home', to: '/' }, { label: 'Breadcrumbs', to: '/docs/components/breadcrumbs' }]
</script>

<template>
  <UiBreadcrumbs :items="items"></UiBreadcrumbs>
</template>
