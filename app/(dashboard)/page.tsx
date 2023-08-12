'use client'
import ChartOption from "@/components/Charts/ChartOption"
import SalesChart from "@/components/Charts/SalesChart"
import Tooltip from "@/components/Tooltip"
import ApexCharts from "apexcharts"
const Home = () => {
  console.log('[Home]: Render')
 

  const showLengend = (e: React.MouseEvent) => {
    const value = (e.currentTarget as HTMLButtonElement).value;
    console.log(value);

    if (value == 'Sales') {
      ApexCharts.exec('sales', 'showSeries', 'Orders');
    } else {
      ApexCharts.exec('sales', 'showSeries', 'Sales');
    }
    ApexCharts.exec('sales', 'toggleSeries', value);
  }

  return <div className="p-[22px] w-full flex gap-[22px] flex-wrap">
    <div className="w-[calc(100%/3*2_-_22px*1/2)] flex flex-col">
      <div className="flex gap-x-2 items-center">
        <h3 className="text-[18px] font-medium cursor-text">Sales Chart</h3>
        <Tooltip text="Daily orders and sales" />
        <div className="ml-auto relative">
          <ChartOption chartID="sales" />
        </div>
      </div>
      <div className="bg-white w-full relative p-[24px] flex flex-col grow">
        <div className="flex items-center">
          <i className="bi bi-bag-check text-success"></i>
          <div className="text-black text-4xl">$10.552</div>
          <div className="text-success"><i className="bi bi-arrow-up"></i> 8.30%</div>
        </div>
        <SalesChart />
        <div className="self-center flex gap-6">
          <button className="text-sm" value="Orders" onClick={showLengend}><span className="inline-block w-2 h-2 rounded-full bg-primary"></span> Sales</button>
          <button className="text-sm" value="Sales" onClick={showLengend}><span className="inline-block w-2 h-2 rounded-full bg-success"></span> Orders</button>
        </div>
      </div>
    </div>
    <div className="w-[calc(100%/3*1_-_22px*1/2)]  h-[500px] bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>
    <div className="w-[calc(100%/3*1_-_22px*2/3)] h-36 bg-slate-500"></div>

  </div>
}

export default Home
