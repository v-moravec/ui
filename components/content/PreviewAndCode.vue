<script lang="ts" setup>
const props = defineProps<{
  name: string
  props: { [key: string]: any }
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
        <ComponentExample :props="props.props" :name="name">
          <slot />
        </ComponentExample>
      </template>
      <template #code>
        <ComponentCode :props="props.props" :name="name" />
      </template>
    </UiTabs>
  </div>
</template>
