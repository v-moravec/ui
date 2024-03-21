<script lang="ts">
export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const clipboard = useCopyToClipboard({ timeout: 2000 })
    const icon = ref('i-heroicons-clipboard-document')

    function copy() {
      clipboard.copy(props.code, { title: 'Copied to clipboard!' })

      icon.value = 'i-heroicons-clipboard-document-check'

      setTimeout(() => {
        icon.value = 'i-heroicons-clipboard-document'
      }, 2000)
    }

    return {
      icon,
      copy,
    }
  },
})
</script>

<template>
  <div
    class="scroll group relative overflow-clip rounded-lg bg-[var(--tw-prose-pre-bg)] dark:border dark:border-neutral-700"
    :class="`language-${language}`"
  >
    <button
      class="absolute right-5 top-5 z-[1] rounded-lg bg-white px-2 py-1 text-black opacity-0 transition-opacity group-hover:opacity-100"
      size="xs"
      tabindex="-1"
      @click="copy"
    >
      Copy
    </button>

    <span v-if="filename" class="absolute bottom-8 right-5 text-sm text-white transition-opacity group-hover:opacity-0">
      {{ filename }}
    </span>

    <slot />
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}

pre {
  @apply !my-0 max-h-[600px] rounded-lg !bg-black !p-4 text-sm dark:!bg-black;
}
</style>
