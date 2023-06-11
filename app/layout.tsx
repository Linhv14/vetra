import '@/style/global.css'
import {ReactNode} from 'react'
import {Sidebar} from '@/components/Sidebar'
import Vetra from '@/components/Vetra'
import {Providers} from './providers'

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
          <Vetra>
            <Sidebar />
          </Vetra>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
