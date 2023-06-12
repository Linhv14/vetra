'use client'

import React, {useEffect, useRef, memo} from 'react'
import Image from 'next/image'
import {useDispatch, useSelector} from 'react-redux'
import {appBehavior, toggleAccountLayout} from '@/store/slices/app-behavior'
import clsx from 'clsx'

const AccountBox = () => {
  const isAccountOpen = useSelector(
    (state: appBehavior) => state.appBehavior.isAccountOpen,
  )
  const dispatch = useDispatch()

  const accountRef = useRef<HTMLDivElement>(null)
  const actionRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (accountRef.current?.contains(e.target as Node)) {
        if (actionRef.current?.contains(e.target as Node)) return
        dispatch(toggleAccountLayout())
      } else {
        dispatch(toggleAccountLayout(false))
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      console.log('clean')
      document.removeEventListener('click', handleClick)
    }
  }, [dispatch])

  const classes = clsx(
    'account relative p-[15px] rounded-lg w-full cursor-pointer bg-white flex items-center',
    {
      ['show']: isAccountOpen,
    },
  )

  console.log('[Account-box]: Change state', isAccountOpen)
  console.log('[Account-box]: Re-render')

  return (
    <div
      className={classes}
      ref={accountRef}>
      <div className="account-image w-[50px] h-[50px] rounded-[50%] overflow-hidden mr-[15px]">
        <Image
          className="image w-full"
          src="/assets/users/avatar.jpg"
          width={50}
          height={50}
          alt="avatar"
          priority
        />
      </div>
      <div className="account-infor">
        <h4 className="text-primary font-semibold text-base">Van Linh</h4>
        <span className="text-light-gray text-sm">Sales Manager</span>
      </div>
      <ul
        className="account-action shadow-c-primary absolute w-[60%] left-20 py-[10px] top-[80%] text-left bg-white rounded-lg z-10 transition-all duration-75 hidden"
        ref={actionRef}>
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
        <li className="account-action-item setting">
          <a
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
            Logout
          </a>
        </li>
      </ul>
    </div>
  )
}

export default memo(AccountBox)
