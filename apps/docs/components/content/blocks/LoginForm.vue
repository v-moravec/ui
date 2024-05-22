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
      class="rounded-lg border border-border bg-secondary p-2 outline-primary"
    />
    <input
      type="password"
      placeholder="Password"
      class="rounded-lg border border-border bg-secondary p-2 outline-primary"
    />
    <UiButton>Login</UiButton>
  </UiCard>
</template>
