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
  <UiCard as="article" class="flex w-full overflow-hidden p-0">
    <img class="aspect-square w-1/3" :src="props.image" />
    <div class="flex flex-col justify-center gap-2 p-4">
      <div>
        <UiTextTitle>
          {{ props.title }}
        </UiTextTitle>
        <UiTextDetail>
          {{ props.date }}
        </UiTextDetail>
      </div>
      <UiTextNormal>
        {{ truncate(props.content, 90) }}
      </UiTextNormal>
      <NuxtLink :to="props.link">
        <UiButton class="w-full">Read more</UiButton>
      </NuxtLink>
    </div>
  </UiCard>
</template>
