import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import {useDispatch, useSelector} from 'react-redux'
import {appBehavior, toggleAccountLayout} from '@/store/slices/app-behavior'

const AccountBox = () => {
  const isAccountOpen = useSelector(
    (state: appBehavior) => state.appBehavior.isAccountOpen,
  )
  const dispatch = useDispatch()
  console.log('re-render')
  console.log('account state', isAccountOpen)
  const accountRef = useRef<HTMLDivElement>(null)
  const actionRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    console.log('effect')
    const handleClick = (e: MouseEvent) => {
      if (accountRef.current?.contains(e.target as Node)) {
        if (actionRef.current?.contains(e.target as Node)) return
        dispatch(toggleAccountLayout())
      } else {
        console.log('out')
        dispatch(toggleAccountLayout(false))
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [isAccountOpen])

  return (
    <div
      className={`${
        isAccountOpen && 'show'
      } account relative p-c-15 rounded-lg w-full cursor-pointer bg-white flex items-center`}
      ref={accountRef}>
      <div className="account-image w-c-50 h-c-50 rounded-[50%] overflow-hidden mr-c-15">
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
        className="account-action absolute w-[60%] left-20 py-c-10 top-[80%] text-left bg-white rounded-lg z-10 transition-all duration-75 hidden"
        ref={actionRef}>
        <li>
          <a
            href="#"
            className="block text-sm px-5 py-c-10 hover:text-primary">
            <i className="pr-c-10 bi bi-person"></i>
            Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-sm px-5 py-c-10 hover:text-primary">
            <i className="pr-c-10 bi bi-envelope"></i>
            Inbox
          </a>
        </li>
        <li className="account-action-item setting">
          <a
            href="#"
            className="block text-sm px-5 py-c-10 hover:text-primary">
            <i className="pr-c-10 bi bi-gear"></i>
            Setting
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-sm px-5 py-c-10 hover:text-primary">
            <i className="pr-c-10 bi bi-box-arrow-right"></i>
            Logout
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AccountBox
