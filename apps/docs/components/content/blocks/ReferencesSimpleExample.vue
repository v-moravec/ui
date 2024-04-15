<script setup lang="ts">
const references = [
  {
    message: "v-moravec/ui's setup was more complex than anticipated, taking hours to configure properly.",
    name: 'Alice Johnson',
    avatar: 'https://source.unsplash.com/50x50/?person',
  },
  {
    message: 'Overwhelmed at first, now I find v-moravec/ui indispensable for its depth and flexibility.',
    name: 'Bob White',
    avatar: 'https://source.unsplash.com/50x50/?man',
  },
  {
    message: 'Not a fan of v-moravec/ui. It feels old and clunky. Needs an upgrade.',
    name: 'Clara Belle',
  },
  {
    message:
      'The responsive design templates in v-moravec/ui have completely transformed how we approach project workflows—absolutely exceptional!',
    name: 'Danny Green',
    avatar: 'https://source.unsplash.com/50x50/?woman',
  },
  {
    message: "When issues arise, v-moravec/ui's support is hard to reach.",
    name: 'Eva Storm',
  },
  {
    message: "It's a joy using v-moravec/ui, thanks to its intuitive interface and rich widgets.",
    name: 'Frank Moore',
    avatar: 'https://source.unsplash.com/50x50/?it_specialist',
  },
  {
    message: 'Frustratingly buggy. I expected more reliability.',
    name: 'Grace Lee',
  },
  {
    message: 'v-moravec/ui adapts smoothly across different projects, enhancing our efficiency significantly.',
    name: 'Hank Tyne',
    avatar: 'https://source.unsplash.com/50x50/?product_manager',
  },
  {
    message: 'The comprehensive documentation for v-moravec/ui streamlined our complex feature implementations.',
    name: 'Ivy Watts',
    avatar: 'https://source.unsplash.com/50x50/?designer',
  },
  {
    message: 'Great features, but runs slow on older systems.',
    name: 'Jack Frost',
    avatar: 'https://source.unsplash.com/50x50/?system_engineer',
  },
]
</script>

<template>
  <BlockReferencesSimple :references="references" />
</template>
