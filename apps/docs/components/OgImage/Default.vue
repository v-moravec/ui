<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(defineProps<{ title?: string, description?: string, headline?: string }>(), {
  title: 'title',
  description: 'description',
  headline: 'headline',
})

const title = computed(() => props.title.slice(0, 60))
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center bg-primary">
    <svg class="absolute top-0 right-0" width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g style="mix-blend-mode:overlay" opacity="0.7" filter="url(#mask)">
        <circle cx="500" cy="216" r="199" fill="#000000f2" />
        <circle cx="179" cy="387" r="199" fill="#00000066" />
      </g>
      <defs>
        <filter id="mask" x="-240" y="-374" width="1561" height="1111" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="bgImage" />
          <feBlend mode="normal" in="SourceGraphic" in2="bgImage" result="shape" />
          <feGaussianBlur stdDeviation="110" result="blur" />
        </filter>
      </defs>
    </svg>

    <div class="w-[600px] pl-[100px]">
      <p v-if="headline" class="text-[24px] text-primary mb-4 font-semibold">
        v-moravec/ui
      </p>
      <h1 class="w-[600px] m-0 text-[60px] font-semibold mb-4 text-primary flex items-center">
        <span>{{ title }}</span>
      </h1>
      <p class="text-[32px] text-primary leading-tight">
        {{ description.slice(0, 200) }}
      </p>
    </div>

    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 199.08 116.88"
    style="transform: scale(1.5);"
    class="absolute top-[250px] right-[190px]"
  >
    <defs>
      <linearGradient id="linear-gradient" x1="0" y1="62.42" x2="199.08" y2="62.42" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d9d9d9" />
        <stop offset="1" stop-color="#555" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="156.57"
        y1="58.44"
        x2="42.52"
        y2="58.44"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#eee" />
        <stop offset="1" stop-color="#555" />
      </linearGradient>
    </defs>
    <g id="Layer_3" data-name="Layer 3">
      <path
        d="M43.97,20.82l13.05,26.97-29.47,60.9c-3.48,7.21-12.16,10.22-19.36,6.74-7.21-3.49-10.23-12.16-6.74-19.37L43.97,8.19c.04-.08.08-.16.12-.23-1.97,3.89-2.17,8.63-.12,12.86ZM197.63,96.06L155.11,8.19c-.03-.07-.07-.14-.11-.21,1.97,3.89,2.15,8.62.11,12.84l-13.05,26.97,29.47,60.9c2.5,5.18,7.67,8.19,13.06,8.19,2.12,0,4.27-.47,6.31-1.45,7.2-3.49,10.22-12.16,6.73-19.37Z"
        fill="url(#linear-gradient)"
        stroke-width="0"
      />
      <path
        d="M99.54,116.88c-5.56,0-10.63-3.18-13.05-8.18L43.97,20.82c-3.49-7.21-.47-15.88,6.74-19.37,7.21-3.49,15.88-.47,19.37,6.74l29.47,60.9,29.47-60.9c3.49-7.21,12.16-10.23,19.37-6.74,7.21,3.49,10.22,12.16,6.74,19.37l-42.52,87.87c-2.42,5-7.49,8.18-13.05,8.18Z"
        fill="url(#linear-gradient-2)"
        stroke-width="0"
      />
    </g>
  </svg>
  </div>
</template>