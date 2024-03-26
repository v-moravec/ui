<script lang="ts" setup>
const news = [
  {
    image: 'https://via.placeholder.com/400x200',
    title: "Understanding Vue's Reactivity System",
    date: '26.03.2024',
    content:
      "Vue's reactivity system is a core feature that makes it incredibly efficient and easy to use for developers. This blog post explores how Vue's reactivity system works under the hood, enabling automatic updates in the UI whenever your application's state changes. We'll delve into the mechanisms Vue uses to track dependencies and trigger rerenders, making your development experience smoother and more intuitive.",
    link: 'https://example.com/vue-reactivity',
  },
  {
    image: 'https://via.placeholder.com/400x200',
    title: 'Single File Components: The Vue Advantage',
    date: '27.03.2024',
    content:
      "Vue's Single File Components (SFCs) provide a modular and organized approach to building web applications. In this post, we'll discuss the structure of SFCs, how they promote a clean separation of concerns, and the benefits of using SFCs for both small projects and large-scale applications.",
    link: 'https://example.com/vue-sfc',
  },
  {
    image: 'https://via.placeholder.com/400x200',
    title: 'Vue CLI: Boost Your Development Workflow',
    date: '28.03.2024',
    content:
      "The Vue Command Line Interface (CLI) tool is designed to help you bootstrap and manage Vue projects with ease. Learn how to leverage Vue CLI's features to create, develop, and build Vue applications, effectively streamlining your development process.",
    link: 'https://example.com/vue-cli',
  },
  {
    image: 'https://via.placeholder.com/400x200',
    title: 'Vue Router: Navigating Your Vue Applications',
    date: '29.03.2024',
    content:
      'Vue Router is an essential tool for building single-page applications (SPAs) with Vue.js. This article covers the basics of setting up Vue Router, defining routes, and creating dynamic, user-friendly navigation in your Vue apps.',
    link: 'https://example.com/vue-router',
  },
  {
    image: 'https://via.placeholder.com/400x200',
    title: 'Vuex: State Management in Vue',
    date: '30.03.2024',
    content:
      "Managing state in large-scale Vue applications can be challenging. Vuex provides a centralized store for all your application's state, making it manageable and predictable. This post will introduce Vuex concepts, setup, and how to use Vuex in your Vue applications for effective state management.",
    link: 'https://example.com/vue-vuex',
  },
  {
    image: 'https://via.placeholder.com/400x200',
    title: 'Vue 3 Composition API: Reimagining Reactivity',
    date: '31.03.2024',
    content:
      'Vue 3 introduces the Composition API, a powerful set of features that allows for better code organization and reuse. Discover how the Composition API makes it easier to handle complex component logic and state in this comprehensive guide.',
    link: 'https://example.com/vue-composition-api',
  },
  {
    image: 'https://via.placeholder.com/400x200',
    title: "Vue's Transition and Animation System",
    date: '01.04.2024',
    content:
      "Animating Vue applications is simple and intuitive with Vue's transition and animation system. Learn how to add engaging animations and transitions to your Vue apps with minimal code, enhancing user experience.",
    link: 'https://example.com/vue-transitions',
  },
  {
    image: 'https://via.placeholder.com/400x200',
    title: 'Building Large-Scale Applications with Vue',
    date: '02.04.2024',
    content:
      "Vue's scalability makes it a great choice for enterprise-level applications. This post explores best practices, patterns, and tools for building large-scale applications with Vue, ensuring your project is maintainable and scalable.",
    link: 'https://example.com/vue-large-scale-apps',
  },
]
</script>

<template>
  <UiNewsGrid :news="news" />
</template>
