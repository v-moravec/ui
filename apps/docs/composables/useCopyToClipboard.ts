import { useClipboard } from '@vueuse/core'
import type { Notification } from './useNotifications'

export function useCopyToClipboard(options: Partial<Notification> = {}) {
  const { copy: copyToClipboard, isSupported } = useClipboard()
  const { addNotification } = useNotifications()

  function copy(
    text: string,
    success: { title: string; description?: string } = { title: 'Copied!' },
    failure: { title: string; description?: string } = { title: 'Copied!' }
  ) {
    if (!isSupported) {
      return
    }

    copyToClipboard(text).then(
      () => {
        if (!success.title && !success.description) {
          return
        }

        addNotification({ ...success, ...options, time: 2000 })
      },
      function (e) {
        addNotification({
          ...failure,
          description: failure.description || e.message,
          ...options,
          time: 2000,
        })
      }
    )
  }

  return {
    copy,
  }
}
