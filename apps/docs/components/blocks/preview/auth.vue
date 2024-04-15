<script setup lang="ts"></script>

<template>
  <UiCard class="flex items-center justify-center">
    <UiCard class="flex w-full max-w-[200px] flex-col gap-[10px] p-[10px]">
      <div>
        <p class="mb-1 text-[10px] font-bold">Login</p>
        <p class="text-[8px]">
          Don't have account yet?
          <span class="underline">Register</span>
        </p>
      </div>
      <input
        type="text"
        placeholder="Username"
        class="rounded-lg border border-border bg-secondary p-[4px] text-[10px] outline-primary"
      />
      <input
        type="password"
        placeholder="Password"
        class="rounded-lg border border-border bg-secondary p-[4px] text-[10px] outline-primary"
      />
      <UiButton class="p-[4px] text-[10px]">Login</UiButton>
    </UiCard>
  </UiCard>
</template>
