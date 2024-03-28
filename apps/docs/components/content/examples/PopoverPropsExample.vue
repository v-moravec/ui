<script setup lang="ts">
import type { Placement } from '@floating-ui/vue'
import type { ComponentWithPropsProps } from '~/types/ui'
const offsetSize: Ref<number> = ref(7)

const placement: Ref<{ value: Placement; label: string }> = ref({
  value: 'bottom',
  label: 'Bottom',
})

const placementOptions: Ref<{ value: Placement; label: string }[]> = ref([
  { value: 'top', label: 'Top' },
  { value: 'right', label: 'Right' },
  { value: 'bottom', label: 'Bottom' },
  { value: 'left', label: 'Left' },
])

const props: Ref<ComponentWithPropsProps> = ref({
  componentName: 'UiTooltip',
  props: [
    {
      name: 'offsetSize',
      type: 'number',
      value: offsetSize,
    },
    {
      name: 'placement',
      type: 'option',
      value: placement,
      options: placementOptions,
    },
  ],
})

const bindProps = computed(() => {
  const arr = props.value.props.map((prop) => ({ [prop.name]: prop.type === 'option' ? prop.value.value : prop.value }))
  return Object.assign({}, ...arr)
})

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
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-3 sm:min-w-64 items-center">
      <ComponentWithProps v-model="props" />
      <UiPopover :key="offsetSize + placement.value" v-bind="bindProps">  
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
  </div>
</template>
