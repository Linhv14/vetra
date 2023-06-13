import '@/style/global.css'
import {ReactNode} from 'react'
import {Sidebar} from '@/components/Sidebar'
import {Header} from '@/components/Header'
import Vetra from '@/components/Vetra'
import {Providers} from './providers'
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
            <section className="inset-0  absolute overflow-y-scroll xl:inset-0 xl:left-sidebar transition-all duration-75 ease-linear">
              <div className="relative">
                <Header />
                {children}
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
