import React from 'react'

const DropdownItem = (title: string) => {
  return (
    <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
      <a
        href="#"
        className="flex p-c-10 leading-8 hover:text-primary">
        {title}
      </a>
    </li>
  )
}

export default DropdownItem
