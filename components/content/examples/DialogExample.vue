<script setup lang="ts"></script>

<template>
  <UiDialog scroll-inside>
    <template #activator="{ open }">
      <UiButton icon="fa6-solid:arrow-right" @click="open"></UiButton>
    </template>
    <template #default="{ close }">
      <div>
        <div class="flex justify-end">
          <UiButton class="p-1" type="accent" icon="fa6-solid:xmark" @click="close"></UiButton>
        </div>
        <div class="h-[2000px]" />
      </div>
    </template>
  </UiDialog>
</template>
