import React, { ReactNode } from 'react'

type SidebarItemProps = {
  children: ReactNode,
  title: string,
  active?: boolean,
  badgeText?: boolean,
  badgeTextTitle?: string,
  badgeNumber?: boolean,
  badgeNumberTitle?: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({ children, title, active, badgeText, badgeTextTitle, badgeNumber, badgeNumberTitle }: SidebarItemProps) => {
  return (
    <li className={`${active && "active"} sidebar-item`}>
      <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
        {children}
        <span className="px-3">{title}</span>
        {badgeText && <span className="ml-auto bg-success rounded-md p-1 text-white text-sm">
          {badgeTextTitle}
        </span>}
        {badgeNumber && <span className="flex ml-auto items-center justify-center bg-success rounded-[50%] w-c-30 h-c-30 text-center text-white text-sm">
          {badgeNumberTitle}
        </span>}
      </a>
    </li>
  )
}

export default SidebarItem