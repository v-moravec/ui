<script setup lang="ts"></script>

<template>
  <UiCard class="flex items-center justify-center">
    <UiCard as="article" class="flex overflow-hidden p-0">
      <img
        width="100"
        class="aspect-square object-cover"
        src="https://images.unsplash.com/photo-1710942499889-71f233dae342?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div class="flex flex-col justify-center gap-[6px] p-4">
        <div>
          <UiTextTitle class="mb-[1px] text-[9px]">Transforming Your Space with Flat Interior Design</UiTextTitle>
          <UiTextDetail class="mb-[1px] text-[7px]">24.3.2024</UiTextDetail>
        </div>
        <UiTextNormal class="text-[8px]">
          In the realm of interior design, the allure of simplicity has garnered a timeless appeal....
        </UiTextNormal>
        <UiButton size="sm" class="w-full text-[8px]">Read more</UiButton>
      </div>
    </UiCard>
  </UiCard>
</template>
