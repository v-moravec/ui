<template>
  <UiCard class="flex w-full max-w-sm flex-col gap-4">
    <div>
      <p class="mb-1 text-2xl font-bold">Login</p>
      <p>
        Don't have an account yet?
        <span class="underline">Register</span>
      </p>
    </div>
    <input
      type="text"
      placeholder="Username"
      class="rounded-lg border border-neutral-300 p-2 dark:border-neutral-700"
    />
    <input
      type="password"
      placeholder="Password"
      class="rounded-lg border border-neutral-300 p-2 dark:border-neutral-700"
    />
    <UiButton>Login</UiButton>
  </UiCard>
</template>
