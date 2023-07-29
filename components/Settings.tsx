import {StoreDispatch} from '@/store'
import {IAppBehavior, toggleSettingLayout} from '@/store/slices/app-behavior'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Overlay from './Overlay'

const Settings = () => {
  const dispatch: StoreDispatch = useDispatch()
  const isSettingOpen = useSelector(
    (state: IAppBehavior) => state.appBehavior.isSettingOpen,
  )
  return (
    <>
      <div
        className={`${
          isSettingOpen
            ? 'right-0 z-50'
            : '-right-full sm:-right-notification z-40'
        } w-full sm:w-notification absolute xl:-right-notification flex-col h-full effect-linear flex bg-white`}>
        <div className="border-y border-t border-solid border-y-light-border flex items-center h-header px-[22px] py-[30px]">
          <div className="mr-3 text-[22px] translate-y-[2px]">
            <i className="bi bi-gear"></i>
          </div>
          <h2 className="font-normal text-[22px]">Settings</h2>
          <div
            onClick={() => {
              dispatch(toggleSettingLayout(false))
            }}
            className="ml-auto text-[25px] font-bold cursor-pointer hover:text-primary hover:translate-x-1 transition-all duration-75">
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
        <ul className="p-[22px] flex flex-col srollable gap-y-4 grow">
          <li className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 p-1 border-[2px] border-solid border-primary appearance-none bg-no-repeat bg-cover rounded-md custom-checked"
              name="theme-color"
              id="theme-color"
            />
            <label
              className="cursor-pointer hover:text-primary"
              htmlFor="theme-color">
              Enable dark mode
            </label>
          </li>
          <li className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 p-1 border-[2px] border-solid border-primary appearance-none bg-no-repeat bg-cover rounded-md custom-checked"
              name="remember"
              id="remember"
            />
            <label
              className="cursor-pointer hover:text-primary"
              htmlFor="remember">
              Remember next visits
            </label>
          </li>
          <li className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 p-1 border-[2px] border-solid border-primary appearance-none bg-no-repeat bg-cover rounded-md custom-checked"
              name="allow-notify"
              id="allow-notify"
            />
            <label
              className="cursor-pointer hover:text-primary"
              htmlFor="allow-notify">
              Allow notifications
            </label>
          </li>
          <li className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 p-1 border-[2px] border-solid border-primary appearance-none bg-no-repeat bg-cover rounded-md custom-checked"
              name="hide-menu"
              id="hide-menu"
            />
            <label
              className="cursor-pointer hover:text-primary"
              htmlFor="hide-menu">
              Hide menus
            </label>
          </li>
        </ul>
        <div className="flex gap-x-3 gap-y-3 mx-[22px] my-5 flex-wrap effect-ease">
          <a
            className="px-5 py-3 bg-primary text-sm text-white rounded-lg effect-ease cursor-pointer hover:bg-dark-primary"
            href="#">
            All Settings
          </a>
        </div>
      </div>
      {isSettingOpen ? <Overlay /> : ''}
    </>
  )
}

export default Settings
