<script setup lang="ts"></script>

<template>
  <UiCard class="flex items-center justify-center">
    <UiCard :class="cn('relative p-[20px] hover:bg-secondary hover:text-secondary-contrast', 'mt-[8px] pt-[30px]')">
      <div class="flex flex-col gap-[4px]">
        <UiTextTitle class="text-center text-[12px]">Theming</UiTextTitle>
        <UiTextNormal class="max-w-[200px] text-[9px]">
          v-moravec/ui provides a theming system that allows developers to easily customize the appearance of their
          applications. The theming system is based on Tailwind and CSS variables, which can be easily modified to
          change the appearance of the application.
        </UiTextNormal>
      </div>
      <div
        class="absolute left-1/2 flex size-[40px] -translate-x-1/2 items-center justify-center rounded-lg bg-primary p-3 text-primary-contrast"
        :class="'-top-[20px]'"
      >
        <Icon name="fa6-solid:palette" class="h-full w-full" />
      </div>
    </UiCard>
  </UiCard>
</template>
