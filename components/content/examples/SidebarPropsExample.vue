<script setup lang="ts">
const positionOptions = [
  { value: 'left', label: 'left' },
  { value: 'right', label: 'right' },
  { value: 'bottom', label: 'bottom' },
]
const position: Ref<{ value: 'left' | 'right' | 'bottom'; label: string }> = ref({ value: 'left', label: 'left' })

const showOverlayOptions = [
  { value: true, label: 'true' },
  { value: false, label: 'false' },
]
const showOverlay: Ref<{ value: boolean; label: string }> = ref({ value: true, label: 'true' })
</script>

<template>
  <div class="flex flex-col gap-2">
    <UiCard class="flex flex-col gap-3 p-5 sm:min-w-64">
      <UiCard>
        <p class="font-mono text-xs">&lt;UiSidebar</p>
        <div class="ml-4 flex items-baseline">
          <p class="font-mono text-xs">:position="</p>
          <UiSelect button-class="px-1 py-0.5" v-model="position" :options="positionOptions" />
          <p class="text-sm">"</p>
        </div>
        <div class="ml-4 flex items-baseline">
          <p class="font-mono text-xs">:show-overlay="</p>
          <UiSelect button-class="px-1 py-0.5" v-model="showOverlay" :options="showOverlayOptions" />
          <p class="text-sm">"</p>
        </div>
        <p class="font-mono text-xs">&gt;</p>
      </UiCard>
      <UiSidebar :position="position.value" :show-overlay="showOverlay.value">
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
    </UiCard>
  </div>
</template>
