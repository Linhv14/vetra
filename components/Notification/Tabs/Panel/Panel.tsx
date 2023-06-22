import React from 'react'

const Panel = ({children}: {children: React.ReactNode}) => {
  return <div className="relative grow">{children}</div>
}

export default Panel
