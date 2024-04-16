import type {
  EmblaCarouselType as UiCarouselApi,
  EmblaOptionsType as UiCarouselOptions,
  EmblaPluginType as UiCarouselPlugin,
} from 'embla-carousel'
import type { Ref } from 'vue'

export interface UiCarouselProps {
  opts?: UiCarouselOptions | Ref<UiCarouselOptions>
  plugins?: UiCarouselPlugin[] | Ref<UiCarouselPlugin[]>
  orientation?: 'horizontal' | 'vertical'
}

export interface UiCarouselEmits {
  (e: 'init-api', payload: UiCarouselApi): void
}

export interface WithClassAsProps {
  class?: string
}
