import type { Placement, MaybeElement } from '@floating-ui/vue'
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/vue'

export const useUiFloating = (placement: Placement, offsetSize: number = 5) => {
  const anchor = ref<MaybeElement<HTMLElement>>(null)
  const floating = ref<MaybeElement<HTMLElement>>(null)

  const { floatingStyles } = useFloating(anchor, floating, {
    strategy: 'fixed',
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [shift(), flip({ fallbackAxisSideDirection: 'end' }), offset(offsetSize)],
  })

  return [anchor, floating, floatingStyles] as const
}
