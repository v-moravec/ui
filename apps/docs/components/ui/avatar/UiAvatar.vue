<script lang="ts" setup>
const props = withDefaults(
  defineProps<
    (
      | {
          initials: string
          imageUrl?: never
        }
      | {
          imageUrl: string
          initials?: never
        }
    ) & {
      class?: string
    }
  >(),
  {
    initials: undefined,
    imageUrl: undefined,
  }
)
</script>

<template>
  <div
    :class="
      cn(
        'flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border text-xs font-medium',
        props.class
      )
    "
  >
    <span v-if="props.initials && !props.imageUrl" class="truncate p-1">{{ props.initials }}</span>
    <img v-if="props.imageUrl" :src="props.imageUrl" />
  </div>
</template>
