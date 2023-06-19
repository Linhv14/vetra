'use client'

import React, {ReactNode} from 'react'
import {Sidebar} from './Sidebar'
import {shallowEqual, useSelector} from 'react-redux'
import {IAppBehavior} from '@/store/slices/app-behavior'
import {Header} from './Header'
import Notification from './Notification'

type VetraProps = {
  children: ReactNode
}

const Vetra: React.FC<VetraProps> = ({children}: VetraProps) => {
  const isNotificationOpen = useSelector(
    (state: IAppBehavior) => state.appBehavior.isNotificationOpen,
    shallowEqual,
  )

  return (
    <main
      className={`${
        isNotificationOpen ? 'xl:-translate-x-notification translate-x-0' : ''
      } w-full effect-linear min-h-screen`}>
      <Sidebar />
      <section
        className={`${
          isNotificationOpen ? 'overflow-y-hidden' : 'overflow-y-scroll'
        } inset-0 absolute xl:inset-0 xl:left-sidebar transition-all duration-75 ease-linear`}>
        <div className="relative">
          <Header />
          {children}
        </div>
      </section>
      <Notification />
    </main>
  )
}

export default Vetra
