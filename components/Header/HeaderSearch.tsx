import React from 'react'

const HeaderSearch = () => {
  return (
    <div className="hidden lg:flex items-center rounded-lg my-0 mx-[50px] grow bg-white">
      <label
        htmlFor="search"
        className="py-0 px-[14px]">
        <i className="bi bi-search"></i>
      </label>
      <input
        id="search"
        type="text"
        name="search"
        placeholder="Search..."
        className="w-full px-[18px] py-[14px] outline-none border-none text-base"
      />
    </div>
  )
}

export default HeaderSearch
