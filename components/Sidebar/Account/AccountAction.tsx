'use client'

import {
  toggleAccountLayout,
  toggleSettingLayout,
} from '@/store/slices/app-behavior'
import React, {useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux'
import {SignOutButton} from '@clerk/nextjs'
import {StoreDispatch} from '@/store'

const AccountAction = () => {
  const dispatch: StoreDispatch = useDispatch()
  const accountActionRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    const handleOuterClick = (e: MouseEvent) => {
      console.log(
        '[Sidebar->Account-Action/Effect]: Listening outer click event',
      )
      if (
        accountActionRef.current &&
        !accountActionRef.current.contains(e.target as Node)
      ) {
        console.log('[Sidebar->Account-Action]: Outer clicked')
        dispatch(toggleAccountLayout(false))
      }
    }

    document.addEventListener('click', handleOuterClick)
    return () => {
      console.log('[Sidebar->Account-Action]: Clean up click event')
      document.removeEventListener('click', handleOuterClick)
    }
  }, [])

  const openSettings = () => {
    console.log('[Sidebar->Account-Action]: Open Settings')
    dispatch(toggleSettingLayout())
  }

  console.log('[Sidebar->Account-Action]: Render')
  return (
    <ul
      ref={accountActionRef}
      className="account-action shadow-c-primary absolute w-[60%] left-20 py-[10px] top-[80%] text-left bg-white rounded-lg z-10 transition-all duration-75 block">
      <li>
        <a
          href="#"
          className="block text-sm px-5 py-[10px] hover:text-primary">
          <i className="pr-[10px] bi bi-person"></i>
          Profile
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block text-sm px-5 py-[10px] hover:text-primary">
          <i className="pr-[10px] bi bi-envelope"></i>
          Inbox
        </a>
      </li>
      <li>
        <a
          onClick={openSettings}
          href="#"
          className="block text-sm px-5 py-[10px] hover:text-primary">
          <i className="pr-[10px] bi bi-gear"></i>
          Setting
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block text-sm px-5 py-[10px] hover:text-primary">
          <i className="pr-[10px] bi bi-box-arrow-right"></i>
          <SignOutButton>Sign out</SignOutButton>
        </a>
      </li>
    </ul>
  )
}

export default React.forwardRef(AccountAction)
