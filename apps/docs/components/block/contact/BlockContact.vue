<script setup lang="ts"></script>

<template>
  <div class="px-5 pb-5 lg:pb-20 py-20">
    <div class="relative mx-auto grid w-max gap-10 py-10 pb-5 lg:w-fit lg:grid-cols-2 lg:gap-60 lg:pb-20">
      <div class="z-10">
        <UiTextHeading class="mb-2 lg:mb-4">Contact us</UiTextHeading>
        <UiTextNormal class="max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui ac nunc ultricies ultricies. Nullam
          nec dui ac nunc ultricies ultricies.
        </UiTextNormal>
      </div>
      <div class="z-10 w-full max-w-md break-inside-avoid">
        <div class="flex flex-col gap-3">
          <UiTextinput placeholder="Name" />
          <UiTextinput placeholder="Phone" type="tel" />
          <UiTextinput placeholder="Email" type="email" />
          <UiTextarea placeholder="Message" />
          <UiButton>Send</UiButton>
        </div>
      </div>
      <div class="absolute left-32 top-32 size-52 bg-primary/30 blur-3xl"></div>
      <div class="absolute size-52 bg-primary/50 blur-3xl"></div>
    </div>
  </div>
</template>
