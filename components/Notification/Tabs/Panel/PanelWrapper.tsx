import React, {ReactNode} from 'react'

const PanelWrapper = ({children}: {children: ReactNode}) => {
  return (
    <div className={`absolute inset-0 flex flex-col`}>
      <div className="h-[200px] grow">
        <ul className="px-[22px] h-full scrollable scroll-visible">
          {children}
        </ul>
      </div>
      <div className="flex gap-x-5 gap-y-3 mx-[22px] my-5 flex-wrap">
        <a
          className="text-sm text-white py-3 px-4 rounded-lg cursor-pointer bg-success hover:bg-dark-success effect-ease"
          href="#">
          <i className="bi bi-check-lg mr-2"></i>
          Make All Read
        </a>
        <a
          className="text-sm text-white py-3 px-4 rounded-lg cursor-pointer bg-error hover:bg-dark-error effect-ease"
          href="#">
          <i className="bi bi-trash mr-2"></i>
          Delete All
        </a>
      </div>
    </div>
  )
}

export default PanelWrapper
