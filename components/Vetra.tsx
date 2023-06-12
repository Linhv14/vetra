import React, {ReactNode} from 'react'

type VetraProps = {
  children: ReactNode
}

const Vetra: React.FC<VetraProps> = ({children}: VetraProps) => {
  return (
    <main className="vetra transition-all duration-150 ease-linear min-h-screen">
      {children}
    </main>
  )
}

export default Vetra
