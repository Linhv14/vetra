import React from 'react'

type ButtonProps = {
  title: string
  style: string
  icon?: string
  onButtonClick?: () => void
}

const Button: React.FC<ButtonProps> = ({title, style, icon, onButtonClick}) => {
  return (
    <button
      type="button"
      onClick={onButtonClick}
      className={`${style} text-sm !text-white py-3 px-4 rounded-lg cursor-pointer effect-ease`}>
      {icon ? <i className={`${icon} mr-2`}></i> : ''}
      {title}
    </button>
  )
}

export default Button
