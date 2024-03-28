<script setup lang="ts"></script>

<template>
  <UiDialog scroll-inside>
    <template #activator="{ open }">
      <UiButton size="sm" @click="open">Open dialog</UiButton>
    </template>
    <template #default="{ close }">
      <div>
        <div class="flex justify-end">
          <UiButton class="p-1" type="accent" @click="close">
            <Icon name="fa6-solid:xmark" class="h-4 w-4" />
          </UiButton>
        </div>
        <div class="h-[2000px]" />
      </div>
    </template>
  </UiDialog>
</template>
