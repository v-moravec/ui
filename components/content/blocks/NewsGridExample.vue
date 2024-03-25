<script lang="ts" setup>
const news = [
  {
    image:
      'https://images.unsplash.com/photo-1710942499889-71f233dae342?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Transforming Your Space with Flat Interior Design',
    date: '24.3.2024',
    content:
      'In the realm of interior design, the allure of simplicity has garnered a timeless appeal. Among the myriad of design styles, the flat interior aesthetic emerges as a compelling embodiment of understated elegance and modern sophistication. Defined by clean lines, minimalist ornamentation, and a focus on functionality, flat interior design offers a refreshing departure from cluttered spaces, inviting individuals to embrace a sense of tranquility and balance within their homes.',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/500x400',
    title: 'Transforming Your Space with Flat Interior Design',
    date: '24.3.2024',
    content:
      'In the realm of interior design, the allure of simplicity has garnered a timeless appeal. Among the myriad of design styles, the flat interior aesthetic emerges as a compelling embodiment of understated elegance and modern sophistication. Defined by clean lines, minimalist ornamentation, and a focus on functionality, flat interior design offers a refreshing departure from cluttered spaces, inviting individuals to embrace a sense of tranquility and balance within their homes.',
    link: '#',
  },
]
</script>

<template>
  <UiNewsGrid :news="news" />
</template>
