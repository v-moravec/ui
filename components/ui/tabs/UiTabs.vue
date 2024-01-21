<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const props = defineProps<{
  items: any[]
}>()
</script>

<template>
  <TabGroup>
    <TabList class="flex w-fit gap-2 rounded-md bg-secondary p-1.5">
      <Tab
        as="span"
        v-slot="{ selected, disabled }"
        v-for="(item, index) in items"
        :disabled="item.disabled"
        :key="index"
        class="outline-none"
      >
        <UiButton :type="!!selected ? 'primary' : 'accent'" size="sm">
          {{ item.label }}
        </UiButton>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel :unmount="false" v-for="(item, index) in items" :key="index" v-slot="{ selected }">
        <slot :name="item.slot || 'item'" :item="item" :index="index" :selected="selected">
          {{ item.content }}
        </slot>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>
