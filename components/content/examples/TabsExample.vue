<template>
  <div class="flex flex-col gap-2">
    <UiTabs
      :items="[
        { label: 'Login', slot: 'login' },
        { label: 'Register', slot: 'register' },
      ]"
    >
      <template #login>
        <UiCard class="flex w-full max-w-sm flex-col gap-4 min-w-96">
          <div>
            <p class="mb-1 text-2xl font-bold">Login</p>
            <p>
              Don't have account yet?
              <span class="underline">Register</span>
            </p>
          </div>
          <UiInput type="text" placeholder="Username" />
          <UiInput type="password" placeholder="Password" />
          <UiButton>Login</UiButton>
        </UiCard>
      </template>
      <template #register>
        <UiCard class="flex w-full max-w-sm flex-col gap-4 min-w-96">
          <div>
            <p class="mb-1 text-2xl font-bold">Register</p>
            <p>
              Have account already?
              <span class="underline">Login</span>
            </p>
          </div>
          <UiInput type="text" placeholder="Username" />
          <UiInput type="password" placeholder="Password" />
          <UiButton>Register</UiButton>
        </UiCard>
      </template>
    </UiTabs>
  </div>
</template>
