<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => {
  return colorMode.value === 'dark'
})

const currentTheme = useState('theme', () => 'theme-default')

const themeIsDefault = computed(() => {
  return currentTheme.value === 'theme-default'
})
</script>

<template>
  <svg
    id="Vrstva_2"
    data-name="Vrstva 2"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 199.08 116.88"
    :class="currentTheme"
  >
    <defs>
      <linearGradient id="linear-gradient" x1="0" y1="62.42" x2="199.08" y2="62.42" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#d9d9d9" />
        <stop offset="1" :stop-color="themeIsDefault ? (isDark ? '#555' : '#1d1d1b') : 'hsl(var(--primary))'" />
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
        <stop offset="1" :stop-color="themeIsDefault ? (isDark ? '#555' : '#1d1d1b') : 'hsl(var(--primary))'" />
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
</template>
