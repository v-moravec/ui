<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    image: string
    title: string
    date: string
    content: string
  }>(),
  {
    image:
      'https://images.unsplash.com/photo-1710942499889-71f233dae342?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Transforming Your Space with Flat Interior Design',
    date: '24.3.2024',
    content:
      'In the realm of interior design, the allure of simplicity has garnered a timeless appeal. Among the myriad of design styles, the flat interior aesthetic emerges as a compelling embodiment of understated elegance and modern sophistication. Defined by clean lines, minimalist ornamentation, and a focus on functionality, flat interior design offers a refreshing departure from cluttered spaces, inviting individuals to embrace a sense of tranquility and balance within their homes.',
  }
)
</script>

<template>
  <UiCard class="w-full max-w-sm overflow-hidden p-0">
    <img :src="props.image" />
    <div class="flex flex-col gap-4 p-6">
      <div>
        <h1 class="text-balance text-lg font-semibold leading-normal">
          {{ props.title }}
        </h1>
        <span class="text-xs">{{ props.date }}</span>
      </div>
      <p class="leading-relaxed">
        {{ truncate(props.content, 250) }}
      </p>
      <UiButton class="w-full">Read more</UiButton>
    </div>
  </UiCard>
</template>
