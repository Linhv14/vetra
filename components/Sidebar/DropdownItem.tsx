import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

type DropdownItemProps = {
  title: string
  active: boolean
  link?: string
  onItemClick?: () => void
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  title,
  active,
  link = '/',
  onItemClick,
}) => {
  const dropdownItemClass = clsx(
    'dropdown-item pl-[34px] mt-1 rounded-lg hover:bg-light-primary effect-linear',
    {
      ['active']: active,
    },
  )

  return (
    <li
      className={dropdownItemClass}
      onClick={onItemClick}>
      <Link
        href={link}
        className="flex p-[10px] leading-8 hover:text-primary">
        {title}
      </Link>
    </li>
  )
}

export default DropdownItem
