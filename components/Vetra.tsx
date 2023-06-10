import {appBehavior, toggleNotificationLayout} from '@/store/slices/app-behavior'
import React, {ReactNode} from 'react'
import {useSelector, useDispatch} from 'react-redux'
type VetraProps = {
  children: ReactNode
}

const Vetra: React.FC<VetraProps> = ({children}: VetraProps) => {
  const vetra = useSelector((state: appBehavior) => state.appBehavior.isVetraMove)
  return <main className={`vetra ${vetra && 'move'}`}>{children}</main>
}

export default Vetra
