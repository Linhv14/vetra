import { toggleCartLayout, toggleNotificationLayout } from '@/store/slices/app-behavior'

import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
type HeaderMobileProps = {
  isOpen: boolean,
  onClose: () => void
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch()
  const headerMobileRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const handleResize = () => {
      const mobileScreen = 640
      if (window.innerWidth >= mobileScreen) {
        console.log('[Header-Action/Resize]: Trigger close header-action activated')
        onClose()
      }
    }
    const handleOuterClick = (e: MouseEvent) => {
      if (!headerMobileRef.current?.contains(e.target as Node)) {
        console.log('[Header-Action]: Outer clicked')
        onClose()
      }
    }

    console.log('[Header-Action/Effect]: Listening resize event')
    window.addEventListener('resize', handleResize)

    console.log('[Header-Action/Effect]: Listening outer click event')
    document.addEventListener('click', handleOuterClick)
    return () => {
      console.log('[Header-Action]: Clean up resize event')
      window.removeEventListener('resize', handleResize)

      console.log('[Header-Action]: Clean up outer click event')
      document.removeEventListener('click', handleOuterClick)
    }
  }, [])

  console.log("[Header->HeaderMobile] Render");
  console.log("[Header->HeaderMobile]", isOpen);

  return <div ref={headerMobileRef} className={`${isOpen ? "float-from-top" : "float-to-top"} absolute inset-0 bg-white py-0 px-[22px] flex items-center top-0`}
  >
    <ul className="flex items-center ml-auto">
      <li
        role='button'
        className="inline-block relative cursor-pointer text-2xl my-0 mx-5 hover:text-primary"
        onClick={() => dispatch(toggleNotificationLayout())}>
        <i className="bi bi-bell"></i>
        <span className="absolute top-[-26%] right-[-50%] text-[10px] w-6 h-6 text-white flex items-center justify-center rounded-full bg-error">
          10
        </span>
      </li>
      <li
        role='button'
        className="inline-block relative cursor-pointer text-2xl my-0 mx-5 hover:text-primary"
        onClick={() => dispatch(toggleCartLayout())}>
        <i className="bi bi-cart"></i>
        <span className="absolute top-[-26%] right-[-50%] text-[10px] w-6 h-6 text-white flex items-center justify-center rounded-full bg-error">
          5
        </span>
      </li>
    </ul>
    <a
      className="flex text-white bg-primary text-sm gap-2 min-w-[150px] ml-3 py-3 px-4 items-center justify-center rounded-lg hover:bg-dark-primary"
      href="#">
      <i className="bi bi-plus-circle"></i>
      <span>Add Product</span>
    </a>
  </div>
}

export default memo(HeaderMobile)