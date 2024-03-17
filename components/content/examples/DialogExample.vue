<script setup lang="ts"></script>

<template>
  <UiDialog>
    <template #activator="{ open }">
      <UiButton icon="fa6-solid:arrow-right" @click="open"></UiButton>
    </template>
    <template #default="{ close }">
      <div>
        <div class="flex justify-end">
          <UiButton class="p-1" type="accent" icon="fa6-solid:xmark" @click="close"></UiButton>
        </div>
      </div>
    </template>
  </UiDialog>
</template>
