import React from 'react'

type LayoutProps = {children: React.ReactNode}
const AuthLayout: React.FC<LayoutProps> = ({children}: LayoutProps) => {
  return (
    <div className="flex items-center justify-center h-full min-h-screen bg-primary">
      {children}
    </div>
  )
}

export default AuthLayout
