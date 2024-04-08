<script setup lang="ts">
const usageItems = [
  {
    label: 'React',
    content:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces. It lets developers compose complex UIs from small and isolated pieces of code called 'components'.",
  },

  {
    label: 'Vue',
    content:
      'An approachable, performant, and versatile framework for building web interfaces. It features an incrementally adoptable architecture that focuses on declarative rendering and component composition.',
  },

  {
    label: 'Angular',
    content:
      'A platform and framework for building single-page client applications using HTML and TypeScript. Angular provides developers with an efficient, powerful, and easy-to-use toolset.',
  },

  {
    label: 'Svelte',
    content:
      'A radical new approach to building user interfaces. Unlike traditional frameworks, Svelte shifts much of the work to compile time, producing highly optimized vanilla JavaScript at the end.',
  },
]
</script>

<template>
  <div class="w-full">
    <UiAccordion :items="usageItems" />
  </div>
</template>
