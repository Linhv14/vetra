'use client'

import React, {useCallback, useEffect, memo} from 'react'
import Image from 'next/image'
import AccountBox from './Account/AccountBox'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {IAppBehavior, toggleSidebarLayout} from '@/store/slices/app-behavior'
import clsx from 'clsx'
import {StoreDispatch} from '@/store'
import Navigator from './Navigator/Navigator'

const Sidebar: React.FC = () => {
  const isSidebarOpen = useSelector(
    (state: IAppBehavior) => state.appBehavior.isSidebarOpen, shallowEqual
  )
  const dispatch: StoreDispatch = useDispatch()

  const closeSidebar = useCallback(() => {
    console.log('[Sidebar/Callback]: Initial close sidebar func')
    dispatch(toggleSidebarLayout(false))
  }, [])


  const handleResize = useCallback(() => {
    const desktopScreen = 1280
    if (window.innerWidth >= desktopScreen && isSidebarOpen) {
      console.log('[Sidebar/Resize]: Trigger close sidebar activated')
      closeSidebar()
    }
  }, [])

  useEffect(() => {
    console.log('[Sidebar/Effect]: Listening resize event')
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      console.log('[Sidebar]: Clean up resize event')
      window.removeEventListener('resize', handleResize)
    }
  }, [isSidebarOpen])

  console.log('[Sidebar]: Render')

  const sidebarClass = clsx(
    'sidebar w-full -left-full sm:w-sidebar sm:-left-sidebar xl:left-0 pl-[22px] pb-[30px] h-full absolute bg-milk overflow-hidden transition-all duration-150 ease-linear z-50',
    {
      ['translate-x-full sm:translate-x-sidebar bg-white']: isSidebarOpen,
    },
  )

  return (
    <aside className={sidebarClass}>
      <div className="pr-[15px] flex items-center">
        <a
          href="#"
          className="flex items-center h-24 w-[150px] shrink">
          <Image
            className="image w-full"
            src="/assets/logo.svg"
            width={100}
            height={100}
            alt="Vetra logo"
            priority
          />
        </a>
        <div
          className="block xl:hidden p-2 text-2xl cursor-pointer ml-auto hover:text-primary"
          onClick={() => closeSidebar()}>
          <i className="bi bi-x"></i>
        </div>
      </div>

      <div className="overflow-hidden h-full pb-[15%] lg:pb-[30%]">
        <div className="sidebar-box pr-[15px] h-full mr-1 scrollable scroll-visible">
          <AccountBox />
          <Navigator />
        </div>
      </div>
    </aside>
  )
}

export default memo(Sidebar)
