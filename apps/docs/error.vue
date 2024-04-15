<script setup lang="ts">
definePageMeta({
  layout: 'none',
})

const error = useError()

function handleError() {
  clearError({
    redirect: '/',
  })
}
</script>

<template>
  <NuxtLayout>
    <div class="w-full overflow-hidden">
      <div class="z-20 mx-auto flex min-h-[calc(100svh-64px)] max-w-7xl flex-col justify-center px-4 py-10 sm:py-0">
        <div class="z-10 mx-auto flex max-w-3xl flex-col justify-center">
          <div class="max-w-[725px] text-center">
            <h1
              class="text-slate-12 relative mb-8 text-balance text-[38px] font-bold leading-[46px] tracking-[-1.024px;] before:absolute before:left-0 before:top-0 before:w-full md:text-[70px] md:leading-[85px]"
            >
              Whoops.
            </h1>
            <div class="sm:px-20">
              <p class="text-17px font-normal tracking-[-0.16px] md:text-xl">Something went wrong.</p>
              <p class="text-17px font-bold tracking-[-0.16px] md:text-xl">{{ error?.message }}.</p>
            </div>
          </div>
          <div class="mx-auto mt-10 flex gap-5">
            <UiButton @click="handleError">Go to homepage</UiButton>
          </div>
        </div>
        <div class="absolute left-1/2 top-0 z-0 h-screen">
          <div
            class="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-14 -translate-y-2/3 select-none rounded-full bg-neutral-900 opacity-60 blur-3xl dark:bg-neutral-100"
          />
          <div
            class="pointer-events-none absolute right-1/2 top-1/2 h-96 w-96 -translate-y-1/3 translate-x-14 select-none rounded-full bg-neutral-400 opacity-60 blur-3xl dark:bg-neutral-600"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
