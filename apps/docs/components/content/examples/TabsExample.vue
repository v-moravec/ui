<template>
  <div class="flex flex-col gap-2">
    <UiTabs
      :items="[
        { label: 'Login', slot: 'login' },
        { label: 'Register', slot: 'register' },
      ]"
    >
      <template #login>
        <UiCard class="flex w-full min-w-96 max-w-sm flex-col gap-4">
          <div>
            <p class="mb-1 text-2xl font-bold">Login</p>
            <p>
              Don't have an account yet?
              <span class="underline">Register</span>
            </p>
          </div>
          <UiTextinput type="text" placeholder="Username" />
          <UiTextinput type="password" placeholder="Password" />
          <UiButton>Login</UiButton>
        </UiCard>
      </template>
      <template #register>
        <UiCard class="flex w-full min-w-96 max-w-sm flex-col gap-4">
          <div>
            <p class="mb-1 text-2xl font-bold">Register</p>
            <p>
              Have account already?
              <span class="underline">Login</span>
            </p>
          </div>
          <UiTextinput type="text" placeholder="Username" />
          <UiTextinput type="password" placeholder="Password" />
          <UiButton>Register</UiButton>
        </UiCard>
      </template>
    </UiTabs>
  </div>
</template>
