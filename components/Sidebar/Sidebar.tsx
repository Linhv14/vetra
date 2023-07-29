'use client'

import React, {useEffect, memo, useCallback} from 'react'
import Image from 'next/image'
import AccountBox from './Account/AccountBox'
import {useDispatch, useSelector} from 'react-redux'
import {IAppBehavior, toggleSidebarLayout} from '@/store/slices/app-behavior'
import Navigator from './Navigator/Navigator'

const Sidebar: React.FC = () => {
  const isSidebarOpen = useSelector(
    (state: IAppBehavior) => state.appBehavior.isSidebarOpen,
  )
  const dispatch = useDispatch()


  useEffect(() => {
    const handleResize = () => {
      const desktopScreen = 1280
      if (window.innerWidth >= desktopScreen && isSidebarOpen) {
        console.log('[Sidebar/Resize]: Trigger close sidebar activated')
        dispatch(toggleSidebarLayout(false))
      }
    }
    if (isSidebarOpen) {
      console.log('[Sidebar/Effect]: Listening resize event')
      window.addEventListener('resize', handleResize)
    }
    return () => {
      console.log('[Sidebar]: Clean up resize event')
      window.removeEventListener('resize', handleResize)
    }
  }, [isSidebarOpen])

  console.log('[Sidebar]: Render')

  return (
    <aside
      className={`${
        isSidebarOpen ? 'translate-x-full sm:translate-x-sidebar bg-white' : ''
      } sidebar w-full -left-full sm:w-sidebar sm:-left-sidebar xl:left-0 pl-[22px] pb-[30px] h-full absolute bg-milk overflow-hidden transition-all duration-150 ease-linear z-50`}>
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
          onClick={() => dispatch(toggleSidebarLayout(false))}>
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
