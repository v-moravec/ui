<script setup lang="ts">
const currentPage = defineModel<number>({
  default: 1,
})

const props = withDefaults(
  defineProps<{
    totalPages: number
    limit?: number
  }>(),
  {
    limit: 5,
  }
)

const validLimit = props.limit < 5 ? 5 : props.limit

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function nextPage() {
  if (currentPage.value < props.totalPages) {
    currentPage.value++
  }
}

function setPage(page: number) {
  if (page >= 1 && page <= props.totalPages) {
    currentPage.value = page
  }
}

const startPage = ref(1)
const endPage = ref(props.totalPages)

const visiblePages: Ref<number[]> = ref([])

watch(
  currentPage,
  () => {
    const maxPages = Math.ceil(validLimit)
    startPage.value =
      currentPage.value === props.totalPages
        ? currentPage.value - Math.floor(validLimit / 2) - 1
        : Math.max(2, currentPage.value - Math.floor(validLimit / 2))
    visiblePages.value = Array.from({ length: maxPages - 2 }, (_, index) => index + startPage.value)
  },
  { immediate: true }
)
</script>

<template>
  <div class="flex gap-2">
    <UiButton size="sm" @click="previousPage" :disabled="currentPage === 1">
      <Icon name="fa6-solid:chevron-left" />
    </UiButton>
    <template v-if="props.totalPages <= limit">
      <UiButton
        size="sm"
        v-for="page in props.totalPages"
        @click="setPage(page)"
        :key="page"
        :type="currentPage === page ? 'primary' : 'secondary'"
      >
        {{ page }}
      </UiButton>
    </template>
    <template v-else>
      <UiButton size="sm" @click="setPage(1)" :type="currentPage === 1 ? 'primary' : 'secondary'">1</UiButton>
      <span v-if="startPage > 2">...</span>
      <UiButton
        size="sm"
        v-for="page in visiblePages"
        @click="setPage(page)"
        :key="page"
        :type="currentPage === page ? 'primary' : 'secondary'"
      >
        {{ page }}
      </UiButton>

      <span v-if="currentPage < totalPages - 1">...</span>
      <UiButton
        size="sm"
        @click="setPage(props.totalPages)"
        :type="currentPage === props.totalPages ? 'primary' : 'secondary'"
      >
        {{ props.totalPages }}
      </UiButton>
    </template>
    <UiButton size="sm" @click="nextPage" :disabled="currentPage === props.totalPages">
      <Icon name="fa6-solid:chevron-right" />
    </UiButton>
  </div>
</template>
