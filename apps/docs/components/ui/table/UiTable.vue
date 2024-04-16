<script setup lang="ts">
export type Column = {
  field: string
  label: string
  sortable?: boolean
}

export type Item = {
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
  <div class="w-full overflow-x-auto rounded-lg border border-border">
    <table class="min-w-full divide-y-2 divide-border text-left text-sm">
      <thead class="text-neutral-700 dark:text-neutral-100">
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
      <tbody class="divide-y divide-border text-neutral-600 dark:text-neutral-200">
        <tr v-for="item in localItems" :key="item.id">
          <td
            v-html="item[column.field]"
            class="whitespace-nowrap px-8 py-4"
            v-for="column in columns"
            :key="column.field"
          ></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
