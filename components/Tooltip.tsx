import React from 'react'

type TooltipProps = {
  text: string,
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return (
    <div className="relative flex items-center justify-center group">
      <i className="bi bi-question-circle text-primary hover:text-brown cursor-pointer"></i>
      <p className="group-hover:block absolute hidden text-center p-1 px-2 whitespace-nowrap -top-9 right-1/2 translate-x-1/2 bg-black text-white text-[12px] rounded-lg after:content-[''] after:absolute after:right-1/2 after:translate-x-1/2 after:top-full after:w-3 after:h-3 after:bg-black after:rotate-45 after:-translate-y-2/3 after:-z-10">{text}</p>
    </div>
  )
}

export default Tooltip