<template>
  <UiCarousel
    :opts="{ align: 'center', loop: false, containScroll: false, skipSnaps: true }"
    orientation="horizontal"
    class="w-full max-w-md"
  >
    <UiCarouselPrevious class="group mx-auto flex translate-x-0" />
    <UiCarouselContent class="h-80">
      <UiCarouselItem class="flex items-center justify-center" v-for="(_, index) in 5" :key="index">
        <div
          class="flex aspect-square h-80 w-full max-w-xs flex-col items-center justify-center rounded-lg border bg-primary text-2xl font-bold text-primary-contrast"
        >
          <span class="">{{ index }}</span>
        </div>
      </UiCarouselItem>
    </UiCarouselContent>
    <UiCarouselNext class="group mx-auto flex translate-x-0" />
  </UiCarousel>
</template>
