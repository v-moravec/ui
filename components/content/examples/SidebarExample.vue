<script setup lang="ts"></script>

<template>
  <UiSidebar>
    <template #activator="{ open }">
      <UiButton size="sm" @click="open">Open sidebar</UiButton>
    </template>
    <template #default="{ close }">
      <div class="mb-5">
        <div class="flex justify-end">
          <UiButton class="p-1" type="accent" icon="fa6-solid:xmark" @click="close"></UiButton>
        </div>
      </div>
    </template>
  </UiSidebar>
</template>
