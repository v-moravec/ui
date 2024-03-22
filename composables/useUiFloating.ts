import type { Placement, Strategy, MaybeElement } from '@floating-ui/vue'
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/vue'

export const useUiFloating = ({
  placement = 'bottom',
  offsetSize = 5,
  strategy = 'fixed',
}: Partial<{
  placement: Placement
  offsetSize: number
  strategy: Strategy
}>) => {
  const anchor = ref<MaybeElement<HTMLElement>>(null)
  const floating = ref<MaybeElement<HTMLElement>>(null)

  const { floatingStyles } = useFloating(anchor, floating, {
    strategy,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [shift(), flip({ fallbackAxisSideDirection: 'end' }), offset(offsetSize)],
  })

  return { anchor, floating, floatingStyles } as const
}
