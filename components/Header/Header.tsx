import React, {memo} from 'react'
import HeaderAction from './HeaderAction'
import {useDispatch} from 'react-redux'
import {toggleSidebarLayout} from '@/store/slices/app-behavior'

const Header: React.FC = () => {
  const dispatch = useDispatch()

  console.log('[Header]: Render')

  return (
    <nav className="flex h-header items-center py-0 px-[22px] bg-milk">
      <div
        onClick={() => dispatch(toggleSidebarLayout())}
        className="block xl:hidden text-3xl cursor-pointer mt-[2px] hover:text-primary">
        <i className="bi bi-list"></i>
      </div>
      <div>
        <h2 className="px-[10px] font-semibold text-2xl">Dashboard</h2>
      </div>
      <HeaderAction />
    </nav>
  )
}

export default memo(Header)
