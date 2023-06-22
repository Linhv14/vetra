export interface INotification {
  type: NotificationType
  icon?: string
  title: string
  timestamp: string | Date
  seen?: boolean
}

enum NotificationType {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SPECIAL = 'special',
  NORMAL = 'normal',
}

export const activities: INotification[] = [
  {
    type: NotificationType.INFO,
    icon: 'bi bi-person',
    title: 'You joined a group',
    timestamp: 'Today',
    seen: false,
  },
  {
    type: NotificationType.WARNING,
    icon: 'bi bi-hdd',
    title: 'Storage is running low',
    timestamp: 'Today',
    seen: false,
  },
  {
    type: NotificationType.SPECIAL,
    icon: 'bi bi-file-text',
    title: '1 Person sent a file',
    timestamp: 'Yesterday',
    seen: false,
  },
  {
    type: NotificationType.SUCCESS,
    icon: 'bi bi-download',
    title: 'Reports ready to download',
    timestamp: 'Today',
    seen: true,
  },
  {
    type: NotificationType.INFO,
    icon: 'bi bi-lock',
    title: '2 step verification',
    timestamp: 'Yesterday',
    seen: true,
  },
  {
    type: NotificationType.ERROR,
    icon: 'bi bi-hdd',
    title: "Fail to calculate this month's revenue",
    timestamp: 'Today',
    seen: false,
  },
]

export const notes: INotification[] = [
  {
    type: NotificationType.INFO,
    title: "This month's report will be prepared.",
    timestamp: 'Yesterday',
  },
  {
    type: NotificationType.INFO,
    title: 'An email will be sent to the customer.',
    timestamp: 'Yesterday',
  },
  {
    type: NotificationType.NORMAL,
    title: 'The meeting will be held.',
    timestamp: 'Yesterday',
  },
  {
    type: NotificationType.INFO,
    title: 'Conversation with users.',
    timestamp: 'Today',
  },
  {
    type: NotificationType.WARNING,
    title: 'Payment refund will be made to the customer.',
    timestamp: '18 min ago',
  },
  {
    type: NotificationType.INFO,
    title: 'Payment form will be activated.',
    timestamp: '3 days ago',
  },
]

export const alerts: INotification[] = [
  {
    type: NotificationType.WARNING,
    icon: 'bi bi-lock',
    title: 'Signed in with a different device.',
    timestamp: 'Today',
    seen: false,
  },
  {
    type: NotificationType.WARNING,
    icon: 'bi bi-file-text',
    title: 'Your billing information is not active.',
    timestamp: 'Today',
    seen: false,
  },
  {
    type: NotificationType.WARNING,
    icon: 'bi bi-person',
    title: 'Your subscription has expired.',
    timestamp: 'Yesterday',
    seen: true,
  },
  {
    type: NotificationType.WARNING,
    icon: 'bi bi-hdd',
    title: 'Your storage space is running low',
    timestamp: 'Today',
    seen: true,
  },
]
