<script lang="ts" setup>
const model = defineModel<{
  componentName: string
  props: { name: string; value: any; options: { label: string; value: any }[] }[]
}>()
</script>

<template>
  <UiCard>
    <p class="font-mono text-xs">&lt;{{ model?.componentName }}</p>
    <div class="ml-4 flex items-baseline" v-for="prop in model?.props">
      <p class="font-mono text-xs">:{{ prop.name }}="</p>
      <UiSelect button-class="px-1 py-0.5" v-model="prop.value" :options="prop.options" />
      <p class="text-sm">"</p>
    </div>
    <p class="font-mono text-xs">&gt;</p>
  </UiCard>
</template>
