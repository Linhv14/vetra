import '@/style/global.css'
import {ReactNode} from 'react'
import {Sidebar} from '@/components/Sidebar'
import {Header} from '@/components/Header'
import Vetra from '@/components/Vetra'
import {Providers} from './providers'
import Notification from '@/components/Notification'
import Head from 'next/head'
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
        <Providers>
          <Vetra>{children}</Vetra>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
