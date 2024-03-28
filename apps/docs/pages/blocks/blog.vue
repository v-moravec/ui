<script setup lang="ts"></script>

<template>
  <main class="container mx-auto px-4 py-10">
    <UiTextHeading class="text-center">Blog</UiTextHeading>
    <section class="my-4">
      <UiTextTitle>Preview</UiTextTitle>
      <div class="my-2 @container">
        <UiCard class="flex items-center justify-center">
          <NewsPreviewExample />
        </UiCard>
      </div>
    </section>
    <section class="my-4">
      <UiTextTitle>Card</UiTextTitle>
      <div class="my-2 @container">
        <UiCard class="flex items-center justify-center">
          <NewsCardExample />
        </UiCard>
      </div>
    </section>
    <section class="my-4">
      <UiTextTitle>Grid</UiTextTitle>
      <div class="my-2 @container">
        <UiCard class="flex items-center justify-center">
          <NewsGridExample />
        </UiCard>
      </div>
    </section>
  </main>
</template>
