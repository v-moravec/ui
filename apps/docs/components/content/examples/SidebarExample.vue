<script setup lang="ts"></script>

<template>
  <UiSidebar>
    <template #activator="{ open }">
      <UiButton size="sm" @click="open">Open sidebar</UiButton>
    </template>
    <template #default="{ close }">
      <div class="mb-5 h-[calc(100vh-5rem)]">
        <div class="mb-2 flex justify-end">
          <UiButton class="p-1" type="accent" @click="close">
            <Icon name="fa6-solid:xmark" class="h-4 w-4" />
          </UiButton>
        </div>
        <!-- Replace UiCard with sidebar content -->
        <UiCard class="h-full w-full bg-pattern"></UiCard>
        <!-- Replace UiCard with sidebar content -->
      </div>
    </template>
  </UiSidebar>
</template>
