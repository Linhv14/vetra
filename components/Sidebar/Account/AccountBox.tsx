'use client'

import React, {useRef, memo} from 'react'
import Image from 'next/image'
import {useDispatch, useSelector} from 'react-redux'
import {IAppBehavior, toggleAccountLayout} from '@/store/slices/app-behavior'
import AccountAction from './AccountAction'

const AccountBox = () => {
  const accountBoxRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const accountInfoRef = useRef<HTMLDivElement>(null)

  const isAccountOpen = useSelector(
    (state: IAppBehavior) => state.appBehavior.isAccountOpen,
  )
  const dispatch = useDispatch()

  const showAccountAction = (e: React.MouseEvent) => {
    if (
      !accountBoxRef.current ||
      !avatarRef.current ||
      !accountInfoRef.current
    ) {
      return
    }
    if (
      accountBoxRef.current === e.target ||
      accountInfoRef.current.contains(e.target as Node) ||
      avatarRef.current.contains(e.target as Node)
    ) {
      dispatch(toggleAccountLayout())
    }
  }

  console.log('[Sidebar->Account-Box]: Render')

  return (
    <div
      ref={accountBoxRef}
      className="bg-milk xl:bg-white account relative p-[15px] rounded-lg w-full cursor-pointer flex items-center"
      onClick={showAccountAction}>
      <div
        ref={avatarRef}
        className="w-[50px] h-[50px] rounded-[50%] overflow-hidden mr-[15px]">
        <Image
          className="image w-full"
          src="/assets/users/avatar.jpg"
          width={50}
          height={50}
          alt="avatar"
          priority
        />
      </div>
      <div ref={accountInfoRef}>
        <h4 className="text-primary font-semibold text-base">Van Linh</h4>
        <span className="text-light-gray text-sm">Sales Manager</span>
      </div>
      {isAccountOpen ? <AccountAction /> : <></>}
    </div>
  )
}

export default memo(AccountBox)
