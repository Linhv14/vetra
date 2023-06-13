'use client'

import React from 'react'
import HeaderAction from './HeaderAction'
import HeaderSearch from './HeaderSearch'

const Header = () => {
  return (
    <nav className="flex h-header items-center py-0 px-[22px] bg-milk">
      <div className="block xl:hidden text-3xl cursor-pointer mt-[2px] hover:text-primary">
        <i className="bi bi-list"></i>
      </div>
      <div>
        <h2 className="px-[10px] font-semibold text-2xl">Dashboard</h2>
      </div>
      <HeaderSearch />
      <HeaderAction />
    </nav>
  )
}

export default Header
