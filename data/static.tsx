export interface ISidebarItem {
  title: string
  icon: string
  isParent?: boolean
  dropdown?: DropdownItem[]
  active?: boolean
  activeId: number
  badge?: {
    type: 'number' | 'text' | undefined
    content: string | undefined
  }
}

type DropdownItem = {
  name: string
  activeId: number
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
      activeId: 1,
    },
    {
      title: 'Orders',
      activeId: 2,
      isParent: true,
      icon: 'bi bi-receipt',
      dropdown: [
        {
          name: 'List',
          activeId: 3,
        },
        {
          name: 'Detail',
          activeId: 4,
        },
      ],
    },
    {
      title: 'Product',
      activeId: 5,
      isParent: true,
      icon: 'bi bi-truck',
      dropdown: [
        {
          name: 'List Product',
          activeId: 6,
        },
        {
          name: 'Product Detail',
          activeId: 7,
        },
        {
          name: 'Shopping Cart',
          activeId: 8,
        },
        {
          name: 'Checkout',
          activeId: 9,
        },
      ],
    },
    {
      title: 'Buyer',
      activeId: 10,
      isParent: true,
      icon: 'bi bi-wallet',
      dropdown: [
        {
          name: 'Dashboard',
          activeId: 11,
        },
        {
          name: 'Orders',
          activeId: 12,
        },
        {
          name: 'Addresses',
          activeId: 13,
        },
        {
          name: 'Wish List',
          activeId: 14,
        },
      ],
    },
    {
      title: 'Customer',
      activeId: 15,
      icon: 'bi bi-person-badge',
    },
    {
      title: 'Invoices',
      activeId: 16,
      isParent: true,
      icon: 'bi bi-receipt-cutoff',
      dropdown: [
        {
          name: 'List',
          activeId: 17,
        },
        {
          name: 'Detail',
          activeId: 18,
        },
      ],
    },
  ],
  Apps: [
    {
      title: 'Chat',
      activeId: 19,
      icon: 'bi bi-chat-square',
      badge: {
        type: 'number',
        content: '15',
      },
    },
    {
      title: 'Email',
      activeId: 20,
      isParent: true,
      icon: 'bi bi-envelope',
      dropdown: [
        {
          name: 'Inbox',
          activeId: 21,
        },
        {
          name: 'Detail',
          activeId: 22,
        },
        {
          name: 'Email Template',
          activeId: 23,
        },
      ],
    },
    {
      title: 'Todos',
      activeId: 24,
      isParent: true,
      icon: 'bi bi-check-circle',
      dropdown: [
        {
          name: 'List',
          activeId: 25,
        },
        {
          name: 'Detail',
          activeId: 26,
        },
      ],
    },
  ],
  Pages: [
    {
      title: 'Profile',
      activeId: 27,
      isParent: true,
      icon: 'bi bi-person',
      dropdown: [
        {
          name: 'Post',
          activeId: 28,
        },
        {
          name: 'Connections',
          activeId: 29,
        },
      ],
    },
    {
      title: 'Users',
      activeId: 30,
      isParent: true,
      icon: 'bi bi-person-circle',
      dropdown: [
        {
          name: 'List View',
          activeId: 31,
        },
        {
          name: 'Grid View',
          activeId: 32,
        },
      ],
    },
    {
      title: 'Settings',
      activeId: 33,
      icon: 'bi bi-gear',
    },
    {
      title: 'Pricing Table',
      activeId: 34,
      icon: 'bi bi-postcard',
      badge: {
        type: 'text',
        content: 'New',
      },
    },
    {
      title: 'Search Page',
      activeId: 35,
      icon: 'bi bi-search',
    },
    {
      title: 'FAQ',
      activeId: 36,
      icon: 'bi bi-question-circle',
    },
  ],
}
