<script setup lang="ts"></script>

<template>
  <div class="relative w-full overflow-hidden">
    <div
      class="relative z-20 mx-auto flex min-h-[calc(100svh-64px)] max-w-7xl flex-col justify-center px-4 py-10 sm:py-0"
    >
      <div class="z-10 mx-auto flex max-w-3xl flex-col justify-center">
        <div class="max-w-[725px] text-center">
          <h1
            class="relative mb-8 text-balance text-[38px] font-bold leading-[46px] tracking-[-1.024px;] before:absolute before:left-0 before:top-0 before:w-full md:text-[70px] md:leading-[85px]"
          >
            Kickstart your project with ease.
          </h1>
          <div class="text-balance sm:px-20">
            <p class="text-17px font-normal tracking-[-0.16px] md:text-xl">
              Flexible collection of reusable components and themes.
            </p>
            <p class="text-17px font-normal tracking-[-0.16px] md:text-xl">Make it yours.</p>
          </div>
        </div>
        <div class="mx-auto mt-10 flex flex-wrap justify-center gap-5">
          <NuxtLink to="/docs/getting-started/introduction">
            <UiButton>Get started</UiButton>
          </NuxtLink>
          <NuxtLink to="/blocks">
            <UiButton type="secondary" outline>Use blocks</UiButton>
          </NuxtLink>
        </div>
      </div>
      <div class="absolute left-1/2 top-0 z-0 h-full">
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 z-10 h-96 w-96 -translate-x-14 -translate-y-2/3 select-none rounded-full bg-neutral-900 bg-primary/95 opacity-60 blur-3xl"
        />
        <div
          class="pointer-events-none absolute right-1/2 top-1/2 h-96 w-96 -translate-y-1/3 translate-x-14 select-none rounded-full bg-primary/40 opacity-60 blur-3xl dark:bg-primary/30"
        />
      </div>
    </div>
  </div>
</template>
