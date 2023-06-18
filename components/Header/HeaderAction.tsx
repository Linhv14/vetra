'use client'

import React, {memo} from 'react'
import HeaderSearch from './HeaderSearch'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {
  IAppBehavior,
  toggleCartLayout,
  toggleNotificationLayout,
} from '@/store/slices/app-behavior'
import CartBox from './Cart/CartBox'
import {StoreDispatch} from '@/store'

const HeaderAction = () => {
  const dispatch: StoreDispatch = useDispatch()
  const isCartOpen = useSelector(
    (state: IAppBehavior) => state.appBehavior.isCartOpen,
    shallowEqual,
  )

  console.log('[Header-Action]: Render')

  return (
    <>
      <HeaderSearch />
      <ul className="relative flex items-center ml-auto">
        <li className="block lg:hidden relative cursor-pointer text-2xl my-0 mx-5">
          <i className="bi bi-search"></i>
        </li>
        <li className="block sm:hidden relative cursor-pointer text-2xl my-0 mx-5">
          <i className="bi bi-three-dots"></i>
        </li>
        <li
          className="sm:inline-block hidden relative cursor-pointer text-2xl my-0 mx-5 hover:text-primary"
          onClick={() => dispatch(toggleNotificationLayout())}>
          <i className="bi bi-bell"></i>
          <span className="absolute top-[-26%] right-[-50%] text-[10px] w-6 h-6 text-white flex items-center justify-center rounded-full bg-error">
            10
          </span>
        </li>
        <li
          className="sm:inline-block hidden relative cursor-pointer text-2xl my-0 mx-5 hover:text-primary"
          onClick={() => dispatch(toggleCartLayout())}>
          <i className="bi bi-cart"></i>
          <span className="absolute top-[-26%] right-[-50%] text-[10px] w-6 h-6 text-white flex items-center justify-center rounded-full bg-error">
            5
          </span>
        </li>
        {isCartOpen ? <CartBox /> : ''}
      </ul>
      <a
        className="hidden sm:flex text-white bg-primary text-sm gap-2 min-w-[150px] ml-3 py-3 px-4 items-center justify-center rounded-lg hover:bg-dark-primary"
        href="#">
        <i className="bi bi-plus-circle"></i>
        <span>Add Product</span>
      </a>
    </>
  )
}

export default memo(HeaderAction)
