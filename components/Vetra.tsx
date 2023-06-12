import React, {ReactNode} from 'react'

type VetraProps = {
  children: ReactNode
}

const Vetra: React.FC<VetraProps> = ({children}: VetraProps) => {
  return <main className="vetra">{children}</main>
}

export default Vetra
