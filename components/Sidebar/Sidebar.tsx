'use client'

import React from 'react'
import Image from 'next/image'
import SidebarItem from './SidebarItem'
import AccountBox from '../AccountBox'
import { sidebar, ISidebarItem } from '@/data/static'
const Sidebar = () => {

  return (
    <aside className="sidebar pl-c-22 pb-c-30 w-sidebar h-[100%] left-0 absolute bg-milk z-50 reverse">
      <div className="pr-c-15 flex items-center">
        <a href="#" className="flex items-center h-24 w-[35%]">
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

      <div className="sidebar-box pr-c-15 pb-c-45 h-[100%] mr-1 scrollable scroll-visible">
        <AccountBox />
        {Object.entries(sidebar).map(([key, items]: [string, ISidebarItem[]]) => (
          <div key={key}>
            <span className="block text-light-gray text-sm py-5 font-light">{key}</span>
            {items.map((item: ISidebarItem) => (
              <ul>
                <SidebarItem
                  title={item.title} badgeType={item.badge?.type} badgeContent={item.badge?.content} icon={item.icon} isParent={item.isParent}>
                </SidebarItem>
              </ul>
            ))}
          </div>
        ))}

      </div>
    </aside>
  )
}

export default Sidebar
