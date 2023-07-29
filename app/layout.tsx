import '@/style/global.css'
import {ReactNode} from 'react'
import {Providers} from './providers'
import {Poppins} from 'next/font/google'
import {ClerkProvider} from '@clerk/nextjs'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

type LayoutProps = {children: ReactNode}

const SetupLayout: React.FC<LayoutProps> = ({children}: LayoutProps) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
          />
        </head>
        <body className={`${poppins.className} overflow-x-hidden bg-milk`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default SetupLayout
