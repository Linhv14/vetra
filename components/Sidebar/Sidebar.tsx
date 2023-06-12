'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import SidebarItem from './SidebarItem'
import AccountBox from '../AccountBox'
import {sidebar, ISidebarItem} from '@/data/static'
import DropdownItem from './DropdownItem'

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState(1)
  const [activeDropdown, setActiveDropdown] = useState(0)

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

  console.log('[Sidebar]: Re-render')
  return (
    <aside className="sidebar pl-[22px] pb-[30px] w-sidebar h-full left-0 absolute bg-milk overflow-hidden transition-all duration-150 ease-linear z-50">
      <div className="pr-[15px] flex items-center">
        <a
          href="#"
          className="flex items-center h-24 w-[35%]">
          <Image
            className="image w-full"
            src="/assets/logo.svg"
            width={100}
            height={100}
            alt="Vetra logo"
            priority
          />
        </a>
        <div className="p-2 text-2xl hidden cursor-pointer ml-auto hover:text-primary">
          <i className="bi bi-x"></i>
        </div>
      </div>

      <div className="overflow-hidden h-full pb-[30%]">
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
