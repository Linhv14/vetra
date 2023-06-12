import React from 'react'
import clsx from 'clsx'

type DropdownItemProps = {
  title: string
  active: boolean
  onItemClick?: () => void
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  title,
  active,
  onItemClick,
}) => {
  const dropdownItemClass = clsx(
    'dropdown-item pl-[34px] mt-1 rounded-lg hover:bg-light-primary',
    {
      ['active']: active,
    },
  )

  return (
    <li
      className={dropdownItemClass}
      onClick={onItemClick}>
      <a
        href="#"
        className="flex p-[10px] leading-8 hover:text-primary">
        {title}
      </a>
    </li>
  )
}

export default DropdownItem
