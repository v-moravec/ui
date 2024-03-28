<script lang="ts" setup></script>

<template>
  <div>
    <Header />
    <div class="container mx-auto flex flex-col gap-2 px-5 lg:flex-row lg:justify-center lg:gap-10">
      <aside class="w-full max-w-[200px]">
        <div
          class="hidden max-h-[calc(100svh-4rem)] overflow-y-auto bg-background lg:sticky lg:top-16 lg:-mx-4 lg:block lg:px-4"
        >
          <Navigation class="py-8 pr-2" />
        </div>
      </aside>
      <slot />
    </div>
  </div>
</template>
