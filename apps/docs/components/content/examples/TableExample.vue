<script setup lang="ts">
import type { Column, Item } from '~/components/ui/table/UiTable.vue'

const columns: Column[] = [
  { field: 'name', label: 'Name', sortable: true },
  { field: 'age', label: 'Age', sortable: true },
  { field: 'city', label: 'City' },
]

const items: Item[] = [
  { id: 1, name: 'John Doe', age: 30, city: 'New York' },
  { id: 2, name: 'Jane Doe', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Jim Doe', age: 35, city: 'Chicago' },
  { id: 4, name: 'Jill Doe', age: 40, city: 'Houston' },
  { id: 5, name: 'Jack Doe', age: 45, city: 'Phoenix' },
  { id: 6, name: 'Jenny Doe', age: 50, city: 'Philadelphia' },
  { id: 7, name: 'Jerry Doe', age: 55, city: 'San Antonio' },
  { id: 8, name: 'Jessica Doe', age: 60, city: 'San Diego' },
  { id: 9, name: 'Jeff Doe', age: 65, city: 'Dallas' },
  { id: 10, name: 'Jared Doe', age: 70, city: 'San Jose' },
]
</script>

<template>
  <div class="flex w-full flex-col items-end gap-2">
    <UiTable :columns="columns" :items="items" />
  </div>
</template>
