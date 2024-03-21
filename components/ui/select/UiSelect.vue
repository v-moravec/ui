<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  options: { label: string; value: any }[]
  buttonClass?: HTMLAttributes['class']
  optionsClass?: HTMLAttributes['class']
  optionClass?: HTMLAttributes['class']
}>()

const selected = defineModel<{ label: string; value: any }>()

const [anchor, floating, floatingStyles] = useUiFloating({ strategy: 'absolute' })
</script>

<template>
  <Listbox v-model="selected">
    <div class="relative mt-1">
      <ListboxButton
        ref="anchor"
        :class="
          cn(
            'relative w-full rounded-lg border border-border bg-primary py-2 pl-3 pr-10 text-left text-primary-contrast focus:outline-none sm:text-sm',
            props.buttonClass
          )
        "
        as="button"
      >
        <span class="block truncate">{{ selected?.label }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
      </ListboxButton>

      <div ref="floating" :style="floatingStyles" class="w-full z-10">
        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            :class="
              cn(
                'mt-1 max-h-60 w-full min-w-fit overflow-auto rounded-md bg-secondary text-base ring-1 ring-black/5 focus:outline-none sm:text-sm',
                props.optionsClass
              )
            "
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="option in props.options"
              :key="option.label"
              :value="option"
              as="template"
            >
              <button
                :class="
                  cn(
                    [
                      active ? 'bg-primary text-primary-contrast' : 'bg-secondary text-secondary-contrast',
                      'relative w-full text-left select-none p-2',
                    ],
                    props.optionClass
                  )
                "
              >
                <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ option.label }}</span>
              </button>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </div>
  </Listbox>
</template>
