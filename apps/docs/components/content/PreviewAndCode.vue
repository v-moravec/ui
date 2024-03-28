<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="w-full">
    <UiTabs
      :items="[
        { label: 'Preview', slot: 'preview' },
        { label: 'Code', slot: 'code' },
      ]"
    >
      <template #preview>
        <ComponentExample :name="name">
          <slot />
        </ComponentExample>
      </template>
      <template #code>
        <ComponentCode :name="name" />
      </template>
    </UiTabs>
  </div>
</template>
