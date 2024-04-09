---
title: Icon
description:
links:
  - name: Nuxt Icon module
    to: https://nuxt.com/modules/icon
---

After careful consideration, I've decided against developing a custom component for handling icons within this UI library. The reason behind this decision is straightforward: there already exists a [fantastic solution](https://nuxt.com/modules/icon) that perfectly fits the needs and likely surpasses what I could have developed on my own.

## Why should you use Nuxt Icon module?

The Nuxt Icon module offers a flexible and easy way to incorporate icons into your Nuxt applications. It supports a wide range of icon libraries, including Font Awesome, Material Icons, and many others, providing you with a vast selection of icons to choose from for your project's needs. Here are the key benefits:

- Simplicity: No need to manually download icons or manage SVG files. Simply specify the icon you need, and the Nuxt Icon module handles the rest.
- Efficiency: Reduces the bundle size by including only the icons you use in your project, optimizing your application's performance.
- Flexibility: Easily switch between different icon sets or customize icons to match your branding without changing your codebase.

## Installation

```bash
pnpm add @nuxtjs/icon -D
```

Then add it to `modules` in `nuxt.config.ts`.

```typescript
export default defineNuxtConfig({
  modules: ['nuxt-icon']
})
```
