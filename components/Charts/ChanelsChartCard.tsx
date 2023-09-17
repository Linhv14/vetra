import React from 'react'
import Tooltip from '../Tooltip'
import ChartOption from './ChartOption'
import dynamic from 'next/dynamic'

const ChanelsChart = dynamic(() => import('@/components/Charts/ChanelsChart'), {
  ssr: false,
})
const ChanelsChartCard = () => {
  return (
    <>
      <div className="flex gap-x-2 items-center mb-5">
        <h3 className="text-[18px] font-medium cursor-text">Chanels</h3>
        <Tooltip text="Chanels where your products are sold" />
        <div className="ml-auto relative">
          <ChartOption chartID="chanels" />
        </div>
      </div>
      <div className="bg-white w-full relative p-[24px] flex flex-col grow rounded-xl">
        <ChanelsChart />
        <div className='flex w-full pt-1 pb-4 gap-4'>
          <div className='flex justify-center flex-col items-center gap-1 grow'>
            <h2 className='text-3xl'>48%</h2>
            <div className='text-success text-[12px]'>
              <i className="bi bi-arrow-up"></i>
            <span className=''>30.50%</span>
            </div>
            <div className='flex gap-2 justify-center items-center'>
              <span className='bg-primary w-3 h-3 rounded-full block'></span>
              <span className='text-light-gray text-sm'>Social Media</span>
            </div>
          </div>
          <div className='flex justify-center flex-col items-center gap-1 grow'>
            <h2 className='text-4xl'>30%</h2>
            <div className='text-error text-[12px]'>
              <i className="bi bi-arrow-down"></i>
            <span className=''>15.20%</span>
            </div>
            <div className='flex gap-2 justify-center items-center'>
              <span className='bg-light-blue w-3 h-3 rounded-full block'></span>
              <span className='text-light-gray text-sm'>Google</span>
            </div>
          </div>
          <div className='flex justify-center flex-col items-center gap-1 grow'>
            <h2 className='text-4xl'>22%</h2>
            <div className='text-success text-[12px]'>
              <i className="bi bi-arrow-up"></i>
            <span className=''>1.80%</span>
            </div>
            <div className='flex gap-2 justify-center items-center'>
              <span className='bg-purple w-3 h-3 rounded-full block'></span>
              <span className='text-light-gray text-sm'>Email</span>
            </div>
          </div>
        </div>
        <button className='flex gap-2 border-primary outline-none rounded-lg border items-center self-center justify-center px-5 py-2 text-primary text-[15px] hover:bg-primary hover:text-white transition-all ease-linear' type='button'>
          <i className="bi bi-download mr-1"></i>
          Download Report
        </button>
      </div></>
  )
}

export default ChanelsChartCard