import React from 'react'
import ChartOptionButton from './ChartOptionButton'

type ChartOptionProps = { chartID: string }

const ChartOption: React.FC<ChartOptionProps> = ({ chartID }) => {
  const [isOpenButton, setisOpenButton] = React.useState(false)

  return (
    <>
      <div className={`${isOpenButton ? 'border-primary' : 'border-transparent'} cursor-pointer outline-none py-1 border-[1px] border-solid px-2 rounded-md`} onClick={() => { 
        
        setisOpenButton(true) }}>
        <i className="bi bi-three-dots"></i>
      </div>
      <ChartOptionButton isOpen={isOpenButton} chartID={chartID} onClose={() => {setisOpenButton(false)}} />
    </>
  )
}

export default ChartOption