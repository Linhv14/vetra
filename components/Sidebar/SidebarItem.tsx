import React, {ReactNode, useState} from 'react'

type SidebarItemProps = {
  children?: ReactNode
  title: string
  active?: boolean
  badgeType: 'number' | 'text' | undefined
  badgeContent: string | undefined
  icon: string
  isParent?: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  title = '',
  active = false,
  badgeType = undefined,
  badgeContent = '',
  icon = 'bi',
  isParent = false,
}: SidebarItemProps) => {
  const [state, setState] = useState(false)
  let badgeStyle
  if (badgeType == 'text') {
    badgeStyle = 'ml-auto bg-success rounded-md p-1 text-white text-sm'
  } else {
    badgeStyle =
      'flex ml-auto items-center justify-center bg-success rounded-[50%] w-c-30 h-c-30 text-center text-white text-sm'
  }

  return (
    <li className={`${active && 'active'} sidebar-item`}>
      <a
        href="#"
        className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
        <i className={`${icon} text-2xl transition-all duration-75`}></i>
        <span className="px-3">{title}</span>
        {isParent && (
          <i className="bi bi-arrow-right transition-all duration-75 text-light-gray"></i>
        )}
        {badgeType && <span className={badgeStyle}>{badgeContent}</span>}
      </a>
      {isParent && <ul className="sidebar-dropdown hidden">{children}</ul>}
    </li>
  )
}

export default SidebarItem
