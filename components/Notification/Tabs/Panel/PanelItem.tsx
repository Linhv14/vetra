'use client'
import {NotificationType} from '@/data/notification'
import React from 'react'

type PanelItemProps = {
  type: NotificationType
  title: string
  icon?: string
  seen?: boolean
  timestamp: Date | string
  onItemClick?: () => void
  onEditClick?: () => void
  onDeleteClick?: () => void
}

const PanelItem: React.FC<PanelItemProps> = ({
  title,
  type,
  icon,
  seen,
  timestamp,
  onItemClick,
  onEditClick,
  onDeleteClick,
}: PanelItemProps) => {
  const titleClass = `${
    seen ? 'font-normal' : 'font-semibold'
  } text-[14px] group-hover:text-primary effect-ease cursor-pointer`
  const titleClassWithoutIcon = `${
    type !== 'normal' ? 'font-semibold' : ''
  } text-[14px] ${type} cursor-text !bg-transparent`

  return (
    <li
      className="border-b border-solid border-light-border cursor-default flex items-center py-[18px] group"
      onClick={onItemClick}>
      {icon ? (
        <div
          className={`${type} w-[45px] h-[45px] rounded-full shrink-0 text-lg flex items-center justify-center !text-black`}>
          <i className={icon}></i>
        </div>
      ) : (
        ''
      )}
      <div className="px-3">
        <h4 className={icon ? titleClass : titleClassWithoutIcon}>{title}</h4>
        <div className="pt-1 gap-2 font-extralight flex items-center text-xs cursor-text">
          <span>
            <i className="bi bi-clock"></i>
          </span>
          <span className="text-xs">{timestamp.toString()}</span>
        </div>
        {!icon ? (
          <div className="gap-3 text-sm pt-2 flex">
            <a
              href="#"
              onClick={onEditClick}
              className="text-error font-light relative cursor-pointer hover:scale-110 effect-ease">
              Edit
            </a>
            <a
              href="#"
              onClick={onDeleteClick}
              className="text-error font-light relative cursor-pointer hover:scale-110 effect-ease">
              Delete
            </a>
          </div>
        ) : (
          ''
        )}
      </div>
    </li>
  )
}

export default React.memo(PanelItem)
