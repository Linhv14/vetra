import React from 'react'

const PanelItem = () => {
  return (
    <li className="border-b border-solid border-light-border">
      <a
        href="#"
        className="flex items-center py-[18px] group">
        <div className="w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center success">
          <i className="bi bi-download"></i>
        </div>
        <div className="px-3">
          <h4 className="text-[14px] font-normal group-hover:text-primary effect-ease">
            Reports ready to download
          </h4>
          <div className="pt-1 gap-2 font-extralight flex items-center text-xs">
            <span>
              <i className="bi bi-clock"></i>
            </span>
            <span className="text-xs">Yesterday</span>
          </div>
        </div>
      </a>
    </li>
  )
}

export default PanelItem
