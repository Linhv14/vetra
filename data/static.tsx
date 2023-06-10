export interface ISidebarItem {
  title: string
  icon: string
  isParent?: boolean | undefined
  dropdown?: string[] | undefined
  active?: boolean
  badge?: {
    type: 'number' | 'text' | undefined
    content: string
  }
}

interface Sidebar {
  [key: string]: ISidebarItem[]
}

export const sidebar: Sidebar = {
  'E-commmerce': [
    {
      title: 'Dashboard',
      icon: 'bi bi-bar-chart',
      active: true,
    },
    {
      title: 'Orders',
      isParent: true,
      icon: 'bi bi-receipt',
      dropdown: ['List', 'Detail'],
    },
    {
      title: 'Product',
      isParent: true,
      icon: 'bi bi-truck',
      dropdown: ['List Product', 'Product Detail', 'Shopping Cart', 'Checkout'],
    },
    {
      title: 'Buyer',
      isParent: true,
      icon: 'bi bi-wallet',
      dropdown: ['Dashboard', 'Orders', 'Addresses', 'Wish List'],
    },
    {
      title: 'Customer',
      icon: 'bi bi-person-badge',
    },
    {
      title: 'Invoices',
      isParent: true,
      icon: 'bi bi-receipt-cutoff',
      dropdown: ['List', 'Detail'],
    },
  ],
  Apps: [
    {
      title: 'Chat',
      icon: 'bi bi-chat-square',
      badge: {
        type: 'number',
        content: '15',
      },
    },
    {
      title: 'Email',
      isParent: true,
      icon: 'bi bi-envelope',
      dropdown: ['Inbox', 'Detail', 'Email Template'],
    },
    {
      title: 'Todos',
      isParent: true,
      icon: 'bi bi-check-circle',
      dropdown: ['List', 'Detail'],
    },
  ],
  Pages: [
    {
      title: 'Profile',
      isParent: true,
      icon: 'bi bi-person',
      dropdown: ['Post', 'Connections'],
    },
    {
      title: 'Users',
      isParent: true,
      icon: 'bi bi-person-circle',
      dropdown: ['List View', 'Grid View'],
    },
    {
      title: 'Settings',
      icon: 'bi bi-gear',
    },
    {
      title: 'Pricing Table',
      icon: 'bi bi-postcard',
      badge: {
        type: 'text',
        content: 'New',
      },
    },
    {
      title: 'Search Page',
      icon: 'bi bi-search',
    },
    {
      title: 'FAQ',
      icon: 'bi bi-question-circle',
    },
  ],
}
