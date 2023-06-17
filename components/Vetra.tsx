'use client'

import React, {ReactNode} from 'react'
import {Sidebar} from './Sidebar'
import {useSelector} from 'react-redux'
import {IAppBehavior} from '@/store/slices/app-behavior'
import {Header} from './Header'

type VetraProps = {
  children: ReactNode
}

const Vetra: React.FC<VetraProps> = ({children}: VetraProps) => {
  const isSidebarOpen = useSelector(
    (state: IAppBehavior) => state.appBehavior.isSidebarOpen,
  )
  return (
    <main className="w-full transition-all duration-150 ease-linear min-h-screen">
      <Sidebar />
      <section className="inset-0  absolute overflow-y-scroll xl:inset-0 xl:left-sidebar transition-all duration-75 ease-linear">
        <div className="relative">
          <Header />
          {children}
        </div>
      </section>
      {/* <Notification /> */}
      {/* <div className="absolute -right-notification flex flex-col w-notification h-full invisible transition-all duration-150 ease-linear bg-blue-700"></div> */}
    </main>
  )
}

export default Vetra
