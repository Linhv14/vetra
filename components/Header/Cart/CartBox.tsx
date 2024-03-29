'use client'

import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import {useDispatch} from 'react-redux'
import {toggleCartLayout} from '@/store/slices/app-behavior'
import { motion } from "framer-motion"
const CartBox = () => {
  const cartBoxRef = useRef<HTMLLIElement>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('[Header->Cart-Box/Effect]: Listening outer click event')
    const handleOuterClick = (e: MouseEvent) => {
      if (
        cartBoxRef.current &&
        !cartBoxRef.current.contains(e.target as Node)
      ) {
        console.log('[Header->Cart-Box]: Outer clicked')
        dispatch(toggleCartLayout(false))
      }
    }
    document.addEventListener('click', handleOuterClick)
    return () => {
      console.log('[Header->Cart-Box]: Clean up outer click event')
      document.removeEventListener('click', handleOuterClick)
    }
  }, [])

  console.log('[Header->Cart-Box]: Render')

  return (
    <motion.li
      initial={{y: -15, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      exit={{y: -15, opacity: 0}}
      ref={cartBoxRef}
      className="absolute w-cart top-[150%] right-0 transition-all duration-150 ease-linear shadow-c-primary rounded-lg bg-white z-50">
      <div className="border-b border-solid border-light-border px-[15px] py-[10px] text-sm font-medium">
        Shopping Cart
      </div>
      <ul className="scrollable scroll-visible py-0 px-[15px] overflow-y-auto max-h-cart">
        <li className="flex items-center my-[15px] mx-0">
          <a
            href="#"
            className="w-[65px] h-[50px] rounded-xl overflow-hidden">
            <Image
              className="w-[65px] h-[50px] object-cover object-center"
              src="/assets/products/3.jpg"
              alt="product-image"
              width={65}
              height={50}
              priority
            />
          </a>
          <div className="grow py-0 px-[15px]">
            <a
              href="#"
              className="block text-sm font-medium hover:text-primary">
              Digital clock
            </a>
            <span className="text-sm px-[2px]">1</span>
            <span className="text-sm px-[2px]">x</span>
            <span className="text-sm px-[2px]">$125.58</span>
          </div>
          <a
            href="#"
            className="block text-primary text-xl transition-all duration-150 ease-in hover:scale-[1.15]">
            <i className="bi bi-trash"></i>
          </a>
        </li>
        <li className="flex items-center my-[15px] mx-0">
          <a
            href="#"
            className="w-[65px] h-[50px] rounded-xl overflow-hidden">
            <Image
              className="w-[65px] h-[50px] object-cover object-center"
              src="/assets/products/4.jpg"
              alt="product-image"
              width={65}
              height={50}
              priority
            />
          </a>
          <div className="grow py-0 px-[15px]">
            <a
              href="#"
              className="block text-sm font-medium hover:text-primary">
              Toy car
            </a>
            <span className="text-sm px-[2px]">1</span>
            <span className="text-sm px-[2px]">x</span>
            <span className="text-sm px-[2px]">$15.80</span>
          </div>
          <a
            href="#"
            className="block text-primary text-xl transition-all duration-150 ease-in hover:scale-[1.15]">
            <i className="bi bi-trash"></i>
          </a>
        </li>
        <li className="flex items-center my-[15px] mx-0">
          <a
            href="#"
            className="w-[65px] h-[50px] rounded-xl overflow-hidden">
            <Image
              className="w-[65px] h-[50px] object-cover object-center"
              src="/assets/products/6.jpg"
              alt="product-image"
              width={65}
              height={50}
              priority
            />
          </a>
          <div className="grow py-0 px-[15px]">
            <a
              href="#"
              className="block text-sm font-medium hover:text-primary">
              Cake
            </a>
            <span className="text-sm px-[2px]">3</span>
            <span className="text-sm px-[2px]">x</span>
            <span className="text-sm px-[2px]">$4.125</span>
          </div>
          <a
            href="#"
            className="block text-primary text-xl transition-all duration-150 ease-in hover:scale-[1.15]">
            <i className="bi bi-trash"></i>
          </a>
        </li>
        <li className="flex items-center my-[15px] mx-0">
          <a
            href="#"
            className="w-[65px] h-[50px] rounded-xl overflow-hidden">
            <Image
              className="w-[65px] h-[50px] object-cover object-center"
              src="/assets/products/7.jpg"
              alt="product-image"
              width={65}
              height={50}
              priority
            />
          </a>
          <div className="grow py-0 px-[15px]">
            <a
              href="#"
              className="block text-sm font-medium hover:text-primary">
              Drinks
            </a>
            <span className="text-sm px-[2px]">2</span>
            <span className="text-sm px-[2px]">x</span>
            <span className="text-sm px-[2px]">$14.52</span>
          </div>
          <a
            href="#"
            className="block text-primary text-xl transition-all duration-150 ease-in hover:scale-[1.15]">
            <i className="bi bi-trash"></i>
          </a>
        </li>
        <li className="flex items-center my-[15px] mx-0">
          <a
            href="#"
            className="w-[65px] h-[50px] rounded-xl overflow-hidden">
            <Image
              className="w-[65px] h-[50px] object-cover object-center"
              src="/assets/products/10.jpg"
              alt="product-image"
              width={65}
              height={50}
              priority
            />
          </a>
          <div className="grow py-0 px-[15px]">
            <a
              href="#"
              className="block text-sm font-medium hover:text-primary">
              Donut
            </a>
            <span className="text-sm px-[2px]">2</span>
            <span className="text-sm px-[2px]">x</span>
            <span className="text-sm px-[2px]">$10.02</span>
          </div>
          <a
            href="#"
            className="block text-primary text-xl transition-all duration-150 ease-in hover:scale-[1.15]">
            <i className="bi bi-trash"></i>
          </a>
        </li>
      </ul>
      <div className="border-t border-solid border-light-border text-sm font-medium px-[15px] py-[10px]">
        <span>Sub Total:</span>
        <span className="text-primary font-semibold ml-[2px]">$1254.26</span>
      </div>
    </motion.li>
  )
}

export default CartBox
