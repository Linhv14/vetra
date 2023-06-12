import '@/style/global.css'
import {ReactNode} from 'react'
import {Sidebar} from '@/components/Sidebar'
import Vetra from '@/components/Vetra'
import {Providers} from './providers'
import Header from '@/components/Header'
import Notification from '@/components/Notification'

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
            <section className="absolute overflow-y-scroll inset-0 left-sidebar transition-all duration-75 ease-linear">
              <div className="relative">
                <Header />
              </div>
            </section>
            {/* <Notification /> */}
            <div className="absolute -right-notification flex flex-col w-notification h-full invisible transition-all duration-150 ease-linear bg-blue-700"></div>
          </Vetra>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
