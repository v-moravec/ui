<script setup lang="ts"></script>

<template>
  <UiSidebar>
    <template #activator="{ open }">
      <UiButton size="sm" @click="open">Open sidebar</UiButton>
    </template>
    <template #default="{ close }">
      <div class="mb-5">
        <div class="flex justify-end">
          <UiButton class="p-1" type="accent" @click="close">
            <Icon name="fa6-solid:xmark" class="h-4 w-4" />
          </UiButton>
        </div>
      </div>
    </template>
  </UiSidebar>
</template>
