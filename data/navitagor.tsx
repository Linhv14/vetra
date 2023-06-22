export interface INavigatorItem {
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
  link?: string
}

type DropdownItem = {
  name: string
  activeId: number
  link?: string
}

interface INavigator {
  [key: string]: INavigatorItem[]
}

export const navigator: INavigator = {
  'E-commmerce': [
    {
      title: 'Dashboard',
      icon: 'bi bi-bar-chart',
      active: true,
      activeId: 1,
      link: '/',
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
          link: '/orders',
        },
        {
          name: 'Detail',
          activeId: 4,
          link: '/orders/1',
        },
      ],
    },
    {
      title: 'Products',
      activeId: 5,
      isParent: true,
      icon: 'bi bi-truck',
      dropdown: [
        {
          name: 'List Product',
          activeId: 6,
          link: '/products',
        },
        {
          name: 'Product Detail',
          activeId: 7,
          link: '/products/1',
        },
        {
          name: 'Shopping Cart',
          activeId: 8,
          link: '/shopping-cart',
        },
        {
          name: 'Checkout',
          activeId: 9,
          link: '/checkout',
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
          link: '/',
        },
        {
          name: 'Orders',
          activeId: 12,
          link: '/checkout',
        },
        {
          name: 'Address',
          activeId: 13,
          link: '/customers/1/address',
        },
        {
          name: 'Wish List',
          activeId: 14,
          link: '/customers/1/wishlist',
        },
      ],
    },
    {
      title: 'Customers',
      activeId: 15,
      icon: 'bi bi-person-badge',
      link: '/customers',
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
          link: '/invoices',
        },
        {
          name: 'Detail',
          activeId: 18,
          link: '/invoices/1',
        },
      ],
    },
  ],
  Apps: [
    {
      title: 'Chats',
      activeId: 19,
      icon: 'bi bi-chat-square',
      link: '/chats',
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
          link: '/email',
        },
        {
          name: 'Detail',
          activeId: 22,
          link: '/email/1',
        },
        {
          name: 'Email Template',
          activeId: 23,
          link: '/',
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
          link: '/',
        },
        {
          name: 'Detail',
          activeId: 26,
          link: '/',
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
          link: '/',
        },
        {
          name: 'Connections',
          activeId: 29,
          link: '/',
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
          link: '/customers',
        },
        {
          name: 'Grid View',
          activeId: 32,
          link: '/',
        },
      ],
    },
    {
      title: 'Settings',
      activeId: 33,
      icon: 'bi bi-gear',
      link: '/',
    },
    {
      title: 'Pricing Table',
      activeId: 34,
      icon: 'bi bi-postcard',
      link: '/pricing-table',
      badge: {
        type: 'text',
        content: 'New',
      },
    },
    {
      title: 'Search Page',
      activeId: 35,
      icon: 'bi bi-search',
      link: '/search',
    },
    {
      title: 'FAQ',
      activeId: 36,
      icon: 'bi bi-question-circle',
      link: '/faq',
    },
  ],
}
