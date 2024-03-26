<script lang="ts" setup>
export type NewsCardProps = {
  image: string
  title: string
  date: string
  content: string
  link: string
}

const props = defineProps<NewsCardProps>()
</script>

<template>
  <UiCard as="article" class="w-full max-w-sm overflow-hidden p-0">
    <img width="384" height="384" class="aspect-[3/2] object-cover" :src="props.image" />
    <div class="flex flex-col gap-4 p-6">
      <div>
        <UiTextTitle>
          {{ props.title }}
        </UiTextTitle>
        <UiTextDetail>
          {{ props.date }}
        </UiTextDetail>
      </div>
      <UiTextNormal>
        {{ truncate(props.content, 250) }}
      </UiTextNormal>
      <NuxtLink :to="props.link">
        <UiButton class="w-full">Read more</UiButton>
      </NuxtLink>
    </div>
  </UiCard>
</template>
