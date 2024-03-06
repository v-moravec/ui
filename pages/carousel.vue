<script setup lang="ts">
const slides = [
  {
    name: 'Nido',
    image: 'https://ldseating.jagu.dev/file/nodes/carouselSlide/image/nido-vz55iii-carousel-01.webp/1920x1920/FIT',
    text: 'Křeslo pro jednoho, sezení pro tři nebo rovnou velká pohovka? Modulární systém sezení NIDO navrhlo studio Orlandini Design. Podobu, tvary a rozměry si vyberete vy.',
  },
  {
    name: 'FollowMe',
    image: 'https://ldseating.com/file/nodes/carouselSlide/image/followme-vz56iii-carousel-slide-01.webp/1920x1920/FIT',
    text: 'Křeslo pro jednoho, sezení pro tři nebo rovnou velká pohovka? Modulární systém sezení NIDO navrhlo studio Orlandini Design. Podobu, tvary a rozměry si vyberete vy.',
  },
  {
    name: 'Zoe',
    image: 'https://ldseating.com/file/nodes/carouselSlide/image/zoe-vz59ii-carousel-slide-1.webp/1920x1920/FIT',
    text: 'Křeslo pro jednoho, sezení pro tři nebo rovnou velká pohovka? Modulární systém sezení NIDO navrhlo studio Orlandini Design. Podobu, tvary a rozměry si vyberete vy.',
  },
]
</script>

<template>
  <div>
    <UiCarousel
      :opts="{ loop: true, align: 'center', containScroll: false }"
      class="min-h-[70svh] w-full bg-neutral-100 @container"
    >
      <UiCarouselPrevious class="absolute left-2 top-1/2 z-10" />
      <UiCarouselContent class="h-full">
        <UiCarouselItem
          class="min-w-[calc(100vw-250px)] @lg:max-w-[calc(100vw-250px)] @lg:px-2"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <div class="h-full">
            <div class="flex h-full w-full flex-col items-center justify-center">
              <div class="relative w-full">
                <p
                  class="absolute left-28 top-1/2 -translate-y-1/2 text-8xl font-bold text-white shadow-black drop-shadow-2xl"
                >
                  {{ slide.name }}
                </p>
                <img
                  class="h-full max-h-[70vh] min-h-[70vh] w-full object-cover"
                  :src="slide.image"
                  alt=""
                  title=""
                  loading="lazy"
                />
              </div>
              <p class="max-w-5xl p-5 text-2xl font-bold">{{ slide.text }}</p>
            </div>
          </div>
        </UiCarouselItem>
      </UiCarouselContent>
      <UiCarouselNext class="absolute right-2 top-1/2 z-10" />
    </UiCarousel>
    <UiCarousel :opts="{ dragFree: true }" class="w-full bg-neutral-100 py-20 @container">
      <UiCarouselPrevious class="absolute left-2 top-1/2 z-10" />
      <UiCarouselContent class="h-full">
        <template v-for="i in 5">
          <UiCarouselItem class="max-h-40 max-w-80 @lg:px-2" v-for="(slide, index) in slides" :key="index">
            <div class="h-full">
              <div class="flex h-full w-full flex-col items-center justify-center">
                <div class="relative w-full">
                  <img class="h-full w-full object-cover" :src="slide.image" alt="" title="" loading="lazy" />
                </div>
              </div>
            </div>
          </UiCarouselItem>
        </template>
      </UiCarouselContent>
      <UiCarouselNext class="absolute right-2 top-1/2 z-10" />
    </UiCarousel>
  </div>
</template>
