'use client'

import '@/style/global.css'
import {ReactNode} from 'react'
import {Sidebar} from '@/components/Sidebar'
import Vetra from '@/components/Vetra'
import {Provider} from 'react-redux'
import store from '@/store'

export const metadata = {
  title: 'Vetra',
  description: 'E-commerce Dashboard App',
}

type LayoutProps = {children: ReactNode}

const RootLayout: React.FC<LayoutProps> = ({children}: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
        />
      </head>
      <body>
        <Provider store={store}>
          <Vetra>
            <Sidebar />
          </Vetra>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
