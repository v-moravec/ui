<script setup lang="ts">
const currentTheme = useState('theme', () => 'theme-default')

function changeTheme(theme: string) {
  document.body.classList.remove(currentTheme.value)
  if (theme !== 'theme-default') {
    document.body.classList.add(theme)
  }
  currentTheme.value = theme
}

const themes = [{ class: 'theme-default' }, { class: 'theme-blue' }, { class: 'theme-red' }, { class: 'theme-orange' }, { class: 'theme-creme' }]
</script>

<template>
  <div>
    <UiPopover>
        
      <template #activator>
        <UiButton
          @click="changeTheme(currentTheme)"
        >
          Change theme
        </UiButton>
      </template>
      <div class="flex gap-4">
        <button
          v-for="(theme, index) in themes"
          :key="index"
          @click="changeTheme(theme.class)"
          :class="theme.class, { '!border-border': theme.class === currentTheme }"
          class="flex border-2 border-transparent rounded-full items-center justify-center"
        >
          <span class="bg-primary size-4 rounded-full m-1"></span>
        </button>
      </div>
    </UiPopover>
  </div>
</template>
