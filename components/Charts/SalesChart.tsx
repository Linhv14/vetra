import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import ApexCharts from "apexcharts"
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const SalesChart = () => {

  const salesChartOpt: ApexOptions = {
    chart: {
      id: 'sales',
      type: 'area',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      row: {
        colors: ['transparent'],
      },
    },
    xaxis: {
      categories: ['01 May', '02 May', '03 May', '04 May', '05May', '06 May', '07 May', '08 May', '09 May', '10 May', '11 May', '12 May'],
    },
    legend: {
      show: false
    },
    colors: ['#05b171', '#ff6e40'],
    series: [
      {
        name: "Orders",
        type: "line",
        data: [72, 75, 75, 77, 71, 72, 76, 74, 78, 76, 75, 73]
      },
      {
        name: "Sales",
        type: "line",
        data: [61, 65, 70, 67, 59, 62, 61, 63, 65, 71, 67, 68]
      }
    ]
  };

  const showLengend = (e: React.MouseEvent) => {
    const value = (e.currentTarget as HTMLButtonElement).value;

    if (value == 'Sales') {
      ApexCharts.exec('sales', 'showSeries', 'Orders');
    } else {
      ApexCharts.exec('sales', 'showSeries', 'Sales');
    }
    ApexCharts.exec('sales', 'toggleSeries', value);
  }

  return (
    <>
      <ReactApexChart
        options={salesChartOpt}
        series={salesChartOpt.series}
        height={350}
      />
      <div className="self-center flex gap-7">
        <button className="text-sm" value="Orders" onClick={showLengend}><span className="inline-block mr-1 w-[10px] h-[10px] rounded-full bg-primary"></span> Sales</button>
        <button className="text-sm" value="Sales" onClick={showLengend}><span className="inline-block mr-1 w-[10px] h-[10px] rounded-full bg-success"></span> Orders</button>
      </div>
    </>
  );
};

export default SalesChart;
