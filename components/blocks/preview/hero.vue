<template>
  <UiCard class="relative overflow-hidden p-0">
    <div class="z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 py-10 sm:py-0">
      <div class="z-10 mx-auto flex max-w-3xl flex-col justify-center">
        <div class="max-w-[725px] text-center">
          <h1
            class="relative mx-auto mb-[8px] max-w-[150px] text-balance text-[16px] font-bold leading-[20px] tracking-[-1.024px;]"
          >
            Kickstart your project with ease.
          </h1>
          <div class="text-balance sm:px-20">
            <p class="text-[8px] font-normal tracking-[-0.16px]">
              Flexible collection of reusable components and themes.
            </p>
            <p class="text-[8px] font-normal tracking-[-0.16px]">Make it yours.</p>
          </div>
        </div>
        <div class="mx-auto mt-3 flex flex-wrap justify-center gap-1">
          <UiButton class="rounded-[4px] px-1 py-0.5 text-[5px]">Get started</UiButton>
          <UiButton class="rounded-[4px] px-1 py-0.5 text-[5px]" type="secondary" outline>Use blocks</UiButton>
        </div>
      </div>
      <div class="absolute left-1/2 top-0 z-0 h-full">
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 z-10 size-20 -translate-x-1/4 -translate-y-2/3 select-none rounded-full bg-neutral-900 bg-primary/95 opacity-60 blur-xl"
        />
        <div
          class="translate-x-1/3-translate-x-1/4 pointer-events-none absolute right-1/2 top-1/2 size-20 -translate-y-1/3 select-none rounded-full bg-primary/40 opacity-60 blur-xl dark:bg-primary/30"
        />
      </div>
    </div>
  </UiCard>
</template>
