'use client'

import React, {ReactNode, useRef} from 'react'
import clsx from 'clsx'
import Link from 'next/link'

type NavigatorItemProps = {
  children: ReactNode
  title: string
  active: boolean
  activeDropdown: boolean
  badgeType?: 'number' | 'text'
  badgeContent?: string
  icon: string
  isParent?: boolean
  link?: string
  onItemClick: () => void
}

const NavigatorItem: React.FC<NavigatorItemProps> = ({
  children,
  title = '',
  active = false,
  activeDropdown = false,
  badgeType = undefined,
  badgeContent = undefined,
  icon = 'bi',
  isParent = false,
  link = '/',
  onItemClick,
}) => {
  const dropdownRef = useRef<HTMLUListElement>(null)

  let badgeStyle
  if (badgeType == 'text') {
    badgeStyle = 'ml-auto bg-success rounded-md p-1 text-white text-sm'
  } else {
    badgeStyle =
      'flex ml-auto items-center justify-center bg-success rounded-[50%] w-[30px] h-[30px] text-center text-white text-sm'
  }

  const navigatorItemClass = clsx('sidebar-item', {
    ['active']: active,
  })

  const arrowIconClass = clsx(
    'bi bi-arrow-right transition-all duration-75 text-light-gray',
    {
      ['rotate-90']: activeDropdown,
    },
  )

  return (
    <li
      className={navigatorItemClass}
      onClick={onItemClick}>
      <Link
        onClick={(e) => {
          if (isParent) return e.preventDefault()
        }}
        href={link}
        className="flex items-center p-[10px] rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
        <i className={`${icon} text-2xl transition-all duration-75`}></i>
        <span className="px-3">{title}</span>
        {isParent && <i className={arrowIconClass}></i>}
        {badgeType && <span className={badgeStyle}>{badgeContent}</span>}
      </Link>
      {isParent && (
        <ul
          className="overflow-y-hidden transition-all duration-150 ease-linear"
          style={
            activeDropdown
              ? {height: dropdownRef.current?.scrollHeight}
              : {height: 0}
          }
          ref={dropdownRef}>
          {children}
        </ul>
      )}
    </li>
  )
}

export default NavigatorItem
