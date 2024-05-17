<script setup lang="ts">
const props = defineProps<{
  blocks: {
    title: string
    name: string
    component: any
  }[]
  class?: string
}>()
</script>

<template>
  <div>
    <UiTabs
      :items="[
        { label: 'Preview', slot: 'preview' },
        { label: 'Code', slot: 'code' },
      ]"
      v-for="block in props.blocks"
      class="my-8"
    >
      <template #bar>
        <UiTextTitle class="text-xl">{{ block.title }}</UiTextTitle>
      </template>
      <template #preview>
        <div class="my-2">
          <UiCard :class="cn('flex items-center justify-center md:py-20', props.class)">
            <component :is="block.component" />
          </UiCard>
        </div>
      </template>
      <template #code>
        <Warning>
          This is the source code of the block. You can use it to add the block to your project manually.
        </Warning>
        <Info class="my-4">
          After adding the block using the CLI, you can use it like this:
          <span class="font-bold ml-1">{{ '<' + block.name + ' />' }}</span>
        </Info>
        <ComponentCode :name="block.name" />
      </template>
    </UiTabs>
  </div>
</template>
