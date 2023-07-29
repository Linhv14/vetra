import '@/style/global.css'
import {ReactNode} from 'react'
import Vetra from '@/components/Vetra'

type LayoutProps = {children: ReactNode}

const RootLayout: React.FC<LayoutProps> = ({children}: LayoutProps) => {
  return <Vetra>{children}</Vetra>
}

export default RootLayout
