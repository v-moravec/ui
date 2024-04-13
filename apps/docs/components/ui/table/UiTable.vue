<script setup lang="ts">
import { defineProps } from 'vue'

export type Column = {
  field: string
  label: string
  sortable?: boolean
}

export type Item = {
  id: number | string
  [key: string]: string | number
}

const props = defineProps<{
  columns: Column[]
  items: Item[]
}>()

const localItems = ref(props.items)

watch(
  () => props.items,
  () => {
    localItems.value = props.items
    sort(sortedBy.value)
  }
)

const Orders = {
  ASC: 'asc',
  DESC: 'desc',
  ORIGINAL: 'original',
} as const

const order: Ref<(typeof Orders)[keyof typeof Orders]> = ref('asc')
const sortedBy = ref('')

function changeOrderAndSort(field: string) {
  changeOrder()
  sort(field)
}

function changeOrder() {
  order.value = order.value === Orders.DESC ? Orders.ASC : order.value === Orders.ASC ? Orders.ORIGINAL : Orders.DESC
}

function sort(field: string) {
  if (sortedBy.value !== field) {
    order.value = Orders.DESC
    sortedBy.value = field
  }

  localItems.value = props.items.toSorted((a, b) => {
    if (order.value === Orders.ORIGINAL) {
      return 0
    }

    if (order.value === Orders.ASC) {
      return a[field] > b[field] ? 1 : -1
    }

    return a[field] < b[field] ? 1 : -1
  })
}
</script>

<template>
  <div class="w-full overflow-x-auto rounded border border-border">
    <table class="min-w-full divide-y divide-neutral-300 text-left text-sm">
      <thead class="text-neutral-700">
        <tr>
          <th class="px-8 py-4" v-for="column in columns" :key="column.field">
            <span v-if="!column.sortable">{{ column.label }}</span>
            <UiButton v-else size="sm" @click="changeOrderAndSort(column.field)">
              {{ column.label }}
              <Icon
                :name="order === Orders.ASC ? 'fa6-solid:chevron-up' : 'fa6-solid:chevron-down'"
                v-if="sortedBy === column.field && order !== Orders.ORIGINAL"
              />
            </UiButton>
          </th>
        </tr>
      </thead>
      <tbody class="divide-200 divide-y text-neutral-600">
        <tr v-for="item in localItems" :key="item.id">
          <td class="whitespace-nowrap px-8 py-4" v-for="column in columns" :key="column.field">
            {{ item[column.field] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
