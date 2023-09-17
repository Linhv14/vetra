'use client'
import React from 'react'
import SalesChartCard from '@/components/Charts/SalesChartCard'
import ChanelsChartCard from '@/components/Charts/ChanelsChartCard'
const Home = () => {
  console.log('[Home]: Render')

  return (
    <div className="p-[22px] w-full flex gap-[22px] flex-wrap">
      <div className="w-full lg:w-[calc(100%/5*3_-_22px*1/2)] flex flex-col">
        <SalesChartCard />
      </div>
      <div className="w-full lg:w-[calc(100%/5*2_-_22px*1/2)] flex flex-col">
        <ChanelsChartCard />
      </div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
      <div className="w-full md:w-[calc(100%/2*1_-_22px*1/2)] lg:w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    </div>
  )
}

export default Home
