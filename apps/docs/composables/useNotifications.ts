export type Notification = {
  id?: string
  title: string
  description?: string
  time?: number
  color?: 'red' | 'orange' | '#2c2'
}

export function useNotifications() {
  const notifications = useState<Notification[]>('notifications', () => [])

  const addNotification = (notification: Notification) => {
    notification.id = Date.now().toString(36) + Math.random().toString(36).substring(2)
    notifications.value.push(notification)
  }

  const removeNotification = (id: string | undefined) => {
    notifications.value = notifications.value.filter((n: Notification) => n.id !== id)
  }

  return {
    notifications,
    addNotification,
    removeNotification,
  }
}
