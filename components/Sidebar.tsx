'use client'

import React from 'react'
import Image from 'next/image'
import SidebarItem from './SidebarItem'
import AccountBox from './AccountBox'

const Sidebar = () => {

  return (
    <aside className="sidebar pl-c-22 pb-c-30 w-sidebar h-[100%] left-0 absolute bg-milk z-50 reverse">
      <div className="pr-c-15 flex items-center">
        <a href="#" className="flex items-center h-24 w-[35%]">
          <Image
            className="image w-full"
            src="/assets/logo.svg"
            width={100}
            height={100}
            alt="Vetra logo"
            priority
          />
        </a>
        <div className="p-2 text-2xl hidden cursor-pointer ml-auto hover:text-primary">
          <i className="bi bi-x"></i>
        </div>
      </div>

      <div className="sidebar-box pr-c-15 pb-c-45 h-[100%] mr-1 scrollable scroll-visible">
        <AccountBox />
        <div>
          <span className="block text-light-gray text-sm py-5 font-light">E-Commerce</span>
          <ul>
            <li className="sidebar-item active">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-bar-chart text-2xl transition-all duration-75"></i>
                <span className="px-3">Dashboard</span>
              </a>
            </li>
            <li className="sidebar-item parent">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-receipt text-2xl transition-all duration-75"></i>
                <span className="px-3">Orders</span>
                <i className="bi bi-arrow-right transition-all duration-75 text-light-gray"></i>
              </a>
              <ul className="sidebar-dropdown">
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">List</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Detail</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item parent">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-truck text-2xl transition-all duration-75"></i>
                <span className="px-3">Products</span>
                <i className="bi bi-arrow-right transition-all duration-75 text-light-gray"></i>
              </a>
              <ul className="sidebar-dropdown hidden">
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">List View</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Grid View</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Product Detail</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Shopping Cart</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Checkout</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item parent">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-wallet text-2xl transition-all duration-75"></i>
                <span className="px-3">Buyer</span>
                <i className="bi bi-arrow-right transition-all duration-75 text-light-gray"></i>
              </a>
              <ul className="sidebar-dropdown hidden">
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Dashboard</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Orders</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Addresses</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Wishlist</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-person-badge text-2xl transition-all duration-75"></i>
                <span className="px-3">Customer</span>
              </a>
            </li>
            <li className="sidebar-item parent">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-receipt-cutoff text-2xl transition-all duration-75"></i>
                <span className="px-3">Invoices</span>
                <i className="bi bi-arrow-right transition-all duration-75 text-light-gray"></i>
              </a>
              <ul className="sidebar-dropdown hidden">
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">List</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Detail</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <span className="block text-light-gray text-sm py-5 font-light">Apps</span>
          <ul>
            <SidebarItem title="Chat" badgeNumber badgeNumberTitle="15">
              <i className="bi bi-chat-square text-2xl transition-all duration-75"></i>
            </SidebarItem>
            {/* <li className="sidebar-item">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-chat-square text-2xl transition-all duration-75"></i>
                <span className="px-3">Chats</span>
                <span className="flex ml-auto items-center justify-center bg-success rounded-[50%] w-c-30 h-c-30 text-center text-white text-sm">
                  15
                </span>
              </a>
            </li> */}
            <li className="sidebar-item parent">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-envelope text-2xl transition-all duration-75"></i>
                <span className="px-3">Email</span>
                <i className="bi bi-arrow-right transition-all duration-75 text-light-gray"></i>
              </a>
              <ul className="sidebar-dropdown hidden">
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Inbox</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Detail</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item parent">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-check-circle text-2xl transition-all duration-75"></i>
                <span className="px-3">Todo App</span>
                <i className="bi bi-arrow-right transition-all duration-75 text-light-gray"></i>
              </a>
              <ul className="sidebar-dropdown hidden">
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">List</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Detail</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <span className="block text-light-gray text-sm py-5 font-light">Pages</span>
          <ul>
            <li className="sidebar-item parent">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-person text-2xl transition-all duration-75"></i>
                <span className="px-3">Profile</span>
                <i className="bi bi-arrow-right transition-all duration-75 text-light-gray"></i>
              </a>
              <ul className="sidebar-dropdown hidden">
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Post</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Connections</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item parent">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-person-circle text-2xl transition-all duration-75"></i>
                <span className="px-3">Users</span>
                <i className="bi bi-arrow-right transition-all duration-75 text-light-gray"></i>
              </a>
              <ul className="sidebar-dropdown hidden">
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">List View</a>
                </li>
                <li className="pl-c-34 mt-1 rounded-lg hover:bg-light-primary">
                  <a href="#" className="flex p-c-10 leading-8 hover:text-primary">Grid View</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-gear text-2xl transition-all duration-75"></i>
                <span className="px-3">Settings</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-postcard text-2xl transition-all duration-75"></i>
                <span className="px-3">Pricing Table</span>
                <span className="ml-auto bg-success rounded-md p-1 text-white text-sm">
                  New
                </span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-search text-2xl transition-all duration-75"></i>
                <span className="px-3">Search Page</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="flex items-center p-c-10 rounded-lg leading-8 hover:bg-light-primary hover:text-primary">
                <i className="bi bi-question-circle text-2xl transition-all duration-75"></i>
                <span className="px-3">FAQ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
