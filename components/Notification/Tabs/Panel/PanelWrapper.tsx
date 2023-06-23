import React, {ReactNode} from 'react'
import Button from '../../Button/Button'

const PanelWrapper = ({children}: {children: ReactNode}) => {
  console.log('[Notification->PanelWrapper]: Render')
  return (
    <div className="absolute inset-0 flex-col flex float-from-right">
      {children}
    </div>
  )
}

export default React.memo(PanelWrapper)
