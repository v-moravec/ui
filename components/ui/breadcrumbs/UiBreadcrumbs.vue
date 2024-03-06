<script lang="ts" setup>
const props = defineProps<{
  items: { label: string; to: string }[]
}>()
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ul class="flex">
      <template v-for="(item, index) in props.items" :key="index">
        <li>
          <slot
            name="breadcrumb"
            :to="item.to"
            :title="item.label"
            :last="index === props.items.length - 1"
            :first="index === 0"
          >
            <NuxtLink :to="item.to" class="text-sm">
              {{ item.label }}
              <Icon v-if="index !== props.items.length - 1" class="mx-2" name="fa6-solid:arrow-right" />
            </NuxtLink>
          </slot>
        </li>
      </template>
    </ul>
  </nav>
</template>
