<script setup lang="ts"></script>

<template>
  <main class="container mx-auto px-4 py-10">
    <section class="my-4">
      <UiTextTitle>Card</UiTextTitle>
      <div class="my-2 @container">
        <UiCard class="flex items-center justify-center">
          <FeatureCard />
        </UiCard>
      </div>
    </section>
    <section class="my-4">
      <UiTextTitle>Grid</UiTextTitle>
      <div class="my-2 @container">
        <UiCard class="flex items-center justify-center">
          <FeatureGrid />
        </UiCard>
      </div>
    </section>
  </main>
</template>
