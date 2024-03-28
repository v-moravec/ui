<script lang="ts" setup>
// Convert the chosen color from hexadecimal to RGB
// const chosenColorRgb = [19, 19, 19] // Change this to your chosen color
let chosenColorRgb = ref([255, 100, 32]) // Change this to your chosen color
let chosenColorHex = ref('#ff6420')

watch(chosenColorHex, (newColor) => {
  chosenColorRgb.value = hexToRgb(newColor)
})

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0]
}

// Calculate the brightness of the chosen color
const brightness = computed(
  () => (chosenColorRgb.value[0] + chosenColorRgb.value[1] + chosenColorRgb.value[2]) / (3 * 255)
)

const chosenColorHsl = computed(() =>
  rgbToHsl(chosenColorRgb.value[0], chosenColorRgb.value[1], chosenColorRgb.value[2])
)

let chosenColorSlot = computed(() => {
  if (brightness.value < 0.03) {
    return 10
  } else if (brightness.value > 0.97) {
    return 0
  }
  return Math.round(((1 - chosenColorHsl.value[2]) * 100) / 11) + 1
})

// Determine the best slot for the chosen color based on its brightness
// Map the brightness (0-255) to a slot (2-11) using a power function to skew the distribution towards lighter colors

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  ;(r /= 255), (g /= 255), (b /= 255)
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h: number = 0,
    s: number,
    l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return [h * 360, s, l]
}

const calculateColor = (x: number) => {
  // Calculate the color for the tile at (x)
  // This creates a linear gradient from white to the chosen color to black
  const chosenColorHsl = rgbToHsl(chosenColorRgb.value[0], chosenColorRgb.value[1], chosenColorRgb.value[2])
  let [h, s, l] = chosenColorHsl

  if (x < chosenColorSlot.value) {
    const t = x / chosenColorSlot.value
    l = 1 - t * (1 - l) - 0.05
    s = s + t * s // Linearly increase saturation with t
  } else if (x > chosenColorSlot.value) {
    const t = (x - chosenColorSlot.value) / (12 - chosenColorSlot.value)
    l *= 1 - t
    s = s * (1 - t) // Linearly decrease saturation with t
  }

  return [h, s, l]
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
  }
  return [f(0), f(8), f(4)]
}

const rgbToHex = (r: number, g: number, b: number) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

const colors = computed(() =>
  Array(11)
    .fill(null)
    .map((_, index) => {
      const [h, s, l] = calculateColor(index)
      const rgbColor = hslToRgb(h, s, l)
      const hexColor = rgbToHex(...rgbColor)
      return { hslColor: `hsl(${h}, ${s * 100}%, ${l * 100}%)`, hexColor }
    })
)

function sRGBtoLinear(value: number) {
  if (value <= 0.04045) {
    return value / 12.92
  } else {
    return ((value + 0.055) / 1.055) ** 2.4
  }
}

function linearTosRGB(value: number) {
  if (value <= 0.0031308) {
    return 12.92 * value
  } else {
    return 1.055 * value ** (1 / 2.4) - 0.055
  }
}

function calculateAPCAcontrast(color1: [number, number, number], color2: [number, number, number]) {
  const [r1, g1, b1] = color1.map(sRGBtoLinear)
  const [r2, g2, b2] = color2.map(sRGBtoLinear)

  const l1 = 0.2126 * r1 + 0.7152 * g1 + 0.0722 * b1
  const l2 = 0.2126 * r2 + 0.7152 * g2 + 0.0722 * b2

  const l1srgb = linearTosRGB(l1)
  const l2srgb = linearTosRGB(l2)

  return Math.abs(l1srgb - l2srgb)
}

const switchTextColorIndex = computed(() => {
  for (let index = 0; index < colors.value.length; index++) {
    const bgColor = hexToRgb(colors.value[index].hexColor)
    const contrast1 = calculateAPCAcontrast(bgColor, hexToRgb(colors.value[0].hexColor))
    const contrast2 = calculateAPCAcontrast(bgColor, hexToRgb(colors.value[colors.value.length - 1].hexColor))

    // console.log('Contrast', index, contrast1, contrast2)

    if (contrast1 > 100 && contrast2 > 100 && contrast2 > contrast1) {
      // console.log('Found', index)
      return index
    }
  }

  // console.log('Default 4')
  return 6
})
</script>

<template>
  <div class="flex h-[calc(100svh-4rem)] w-full flex-col items-center justify-center gap-5">
    <label for="hs-color-input" class="mb-2 block text-sm font-medium dark:text-white">Color picker</label>
    <input
      v-model="chosenColorHex"
      type="color"
      class="block h-10 w-10 cursor-pointer rounded-lg border border-gray-200 bg-white p-1 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900"
      title="Choose your color"
    />
    <div class="flex items-center justify-center gap-2">
      <div
        v-for="({ hslColor, hexColor }, index) in colors"
        :key="hexColor"
        class="flex h-32 w-24 flex-col items-center justify-end rounded-lg p-4 text-center text-sm"
        :style="{
          backgroundColor: hslColor,
          color: index > switchTextColorIndex ? colors[1].hslColor : colors[colors.length - 2].hslColor,
        }"
      >
        <Icon v-if="index === chosenColorSlot" name="fa6-solid:check" class="mb-2 h-6 w-6" />
        <span class="font-bold">{{ index === 0 ? 50 : index === colors.length - 1 ? 950 : index * 100 }}</span>
        {{ hexColor }}
      </div>
    </div>
  </div>
</template>
