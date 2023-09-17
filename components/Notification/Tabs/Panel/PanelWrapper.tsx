import React, {ReactNode} from 'react'
import {motion} from "framer-motion"
const PanelWrapper = ({children}: {children: ReactNode}) => {
  console.log('[Notification->PanelWrapper]: Render')
  return (
    <motion.div initial={{x: 50}} animate={{x: 0}} className="absolute inset-0 flex-col flex">
      {children}
    </motion.div>
  )
}

export default React.memo(PanelWrapper)
