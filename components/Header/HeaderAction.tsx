import React from 'react'
import Image from 'next/image'

const HeaderAction = () => {
  return (
    <>
      <ul className="relative flex items-center ml-auto">
        <li className="block lg:hidden relative cursor-pointer text-2xl my-0 mx-5">
          <i className="bi bi-search"></i>
        </li>
        <li className="block sm:hidden relative cursor-pointer text-2xl my-0 mx-5">
          <i className="bi bi-three-dots"></i>
        </li>
        <li className="sm:inline-block hidden relative cursor-pointer text-2xl my-0 mx-5 hover:text-primary">
          <i className="bi bi-bell"></i>
          <span className="absolute top-[-26%] right-[-50%] text-[10px] w-6 h-6 text-white flex items-center justify-center rounded-full bg-error">
            10
          </span>
        </li>
        <li className="sm:inline-block hidden relative cursor-pointer text-2xl my-0 mx-5 hover:text-primary">
          <i className="bi bi-cart"></i>
          <span className="absolute top-[-26%] right-[-50%] text-[10px] w-6 h-6 text-white flex items-center justify-center rounded-full bg-error">
            5
          </span>
        </li>
        <li className="absolute w-cart top-[150%] right-0 transition-all duration-150 ease-linear shadow-c-primary rounded-lg bg-white hidden">
          <div className="border-b border-solid border-light-border px-[15px] py-[10px] text-sm font-medium">
            Shopping Cart
          </div>
          <ul className="scrollable scroll-visible py-0 px-[15px] overflow-y-auto max-h-cart">
            <li className="flex items-center my-[15px] mx-0">
              <a
                href="#"
                className="w-[65px] self-stretch rounded-xl overflow-hidden">
                <Image
                  src="/assets/products/3.jpg"
                  alt="product-image"
                  className="block w-full h-full object-cover object-center"
                  width={65}
                  height={65}
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
                className="w-[65px] self-stretch rounded-xl overflow-hidden">
                <Image
                  src="/assets/products/4.jpg"
                  alt="product-image"
                  className="block w-full h-full object-cover object-center"
                  width={65}
                  height={65}
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
                className="w-[65px] self-stretch rounded-xl overflow-hidden">
                <Image
                  src="/assets/products/6.jpg"
                  alt="product-image"
                  className="block w-full h-full object-cover object-center"
                  width={65}
                  height={65}
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
                className="w-[65px] self-stretch rounded-xl overflow-hidden">
                <Image
                  src="/assets/products/7.jpg"
                  alt="product-image"
                  className="block w-full h-full object-cover object-center"
                  width={65}
                  height={65}
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
                className="w-[65px] self-stretch rounded-xl overflow-hidden">
                <Image
                  src="/assets/products/10.jpg"
                  alt="product-image"
                  className="block w-full h-full object-cover object-center"
                  width={65}
                  height={65}
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
            <span className="text-primary font-semibold ml-[2px]">
              $1254.26
            </span>
          </div>
        </li>
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

export default HeaderAction
