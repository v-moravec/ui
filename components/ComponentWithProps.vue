<script lang="ts" setup>
import type { ComponentWithPropsProps } from '~/types/ui'

const model = defineModel<ComponentWithPropsProps>()
</script>

<template>
  <UiCard>
    <p class="font-mono text-xs">&lt;{{ model?.componentName }}</p>
    <template v-for="prop in model?.props">
      <div v-if="prop.type === 'option'" class="ml-4 flex items-baseline">
        <p class="font-mono text-xs">:{{ prop.name }}="</p>
        <UiSelect button-class="px-1 py-0.5" v-model="prop.value" :options="prop.options" />
        <p class="text-sm">"</p>
      </div>
      <div v-if="prop.type === 'string'" class="ml-4 flex items-baseline">
        <p class="font-mono text-xs">:{{ prop.name }}="</p>
        <UiInput v-model="prop.value" />
        <p class="text-sm">"</p>
      </div>
    </template>
    <p class="font-mono text-xs">&gt;</p>
  </UiCard>
</template>
