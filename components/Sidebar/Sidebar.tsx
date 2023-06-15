'use client'

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import SidebarItem from './SidebarItem'
import AccountBox from './Account/AccountBox'
import {sidebar, ISidebarItem} from '@/data/static'
import DropdownItem from './DropdownItem'
import {useSelector} from 'react-redux'
import {IAppBehavior} from '@/store/slices/app-behavior'
import clsx from 'clsx'

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState(1)
  const [activeDropdown, setActiveDropdown] = useState(0)
  const isSidebarOpen = useSelector(
    (state: IAppBehavior) => state.appBehavior.isSidebarOpen,
  )

  const handleSetActiveItem = (id: number): void => {
    console.log('[Sidebar]: Set new active', id)
    if (activeItem !== id) {
      setActiveItem(id)
      setActiveDropdown(0)
    }
  }

  const handleSetActiveDropdown = (id: number) => {
    setActiveDropdown((pre) => (pre === id ? 0 : id))
  }

  useEffect(() => {
    const desktopScreen = 1280
    const handleResize = () => {
      if (window.innerWidth < desktopScreen) {
      }
    }
    document.addEventListener('resize', handleResize)
    return () => {
      console.log('[Sidebar]: Clean up resize event')
      document.removeEventListener('resize', handleResize)
    }
  }, [])

  console.log('[Sidebar]: Render')

  const sidebarClass = clsx(
    'sidebar w-full -left-full sm:w-sidebar sm:-left-sidebar xl:left-0 pl-[22px] pb-[30px] h-full absolute bg-milk overflow-hidden transition-all duration-150 ease-linear z-50',
    {
      ['translate-x-sidebar bg-white']: isSidebarOpen,
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
        <div className="block xl:hidden p-2 text-2xl cursor-pointer ml-auto hover:text-primary">
          <i className="bi bi-x"></i>
        </div>
      </div>

      <div className="overflow-hidden h-full pb-[15%] lg:pb-[30%]">
        <div className="sidebar-box pr-[15px] h-full mr-1 scrollable scroll-visible">
          <AccountBox />

          {/* Render Sidebar UI with static data */}
          {Object.entries(sidebar).map(
            ([key, items]: [string, ISidebarItem[]]) => (
              <div key={key}>
                <span className="block text-light-gray text-sm py-5 font-light">
                  {key}
                </span>
                <ul>
                  {items.map((item: ISidebarItem) => {
                    return (
                      <SidebarItem
                        key={item.activeId}
                        title={item.title}
                        badgeType={item.badge?.type}
                        badgeContent={item.badge?.content}
                        icon={item.icon}
                        active={activeItem === item.activeId}
                        activeDropdown={activeDropdown === item.activeId}
                        isParent={item.isParent}
                        onItemClick={() => {
                          if (item.isParent) {
                            handleSetActiveDropdown(item.activeId)
                          } else {
                            handleSetActiveItem(item.activeId)
                          }
                        }}>
                        {item.dropdown &&
                          item.dropdown.map((dropdownItem) => (
                            <DropdownItem
                              title={dropdownItem.name}
                              active={activeItem === dropdownItem.activeId}
                              onItemClick={() =>
                                handleSetActiveItem(dropdownItem.activeId)
                              }
                              key={dropdownItem.activeId}
                            />
                          ))}
                      </SidebarItem>
                    )
                  })}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
