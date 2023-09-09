import React from 'react'
import dynamic from 'next/dynamic'
import {ApexOptions} from 'apexcharts'
import ApexCharts from 'apexcharts'
const ReactApexChart = dynamic(() => import('react-apexcharts'), {ssr: false})
import {
  generateDateCategories,
  generateRandomData,
  generateXaxisLabels,
} from '@/data/ganerator'

const SalesChart = () => {
  const salesChartOpt: ApexOptions = {
    chart: {
      id: 'sales',
      type: 'area',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    grid: {
      row: {
        colors: ['transparent'],
      },
    },
    xaxis: {
      categories: generateDateCategories('May', 31),
      // range: 12,
      overwriteCategories: generateXaxisLabels('May', 31, 3),
      labels: {
        rotate: 0,
      },
    },
    legend: {
      show: false,
    },
    colors: ['#05b171', '#ff6e40'],
    series: [
      {
        name: 'Orders',
        type: 'line',
        data: generateRandomData(65, 78, 31),
      },
      {
        name: 'Sales',
        type: 'line',
        data: generateRandomData(57, 64, 31),
      },
    ],
  }

  const showLengend = (e: React.MouseEvent) => {
    const value = (e.currentTarget as HTMLButtonElement).value

    if (value == 'Sales') {
      ApexCharts.exec('sales', 'showSeries', 'Orders')
    } else {
      ApexCharts.exec('sales', 'showSeries', 'Sales')
    }
    ApexCharts.exec('sales', 'toggleSeries', value)
  }

  return (
    <>
      <ReactApexChart
        options={salesChartOpt}
        series={salesChartOpt.series}
        height={350}
      />
      <div className="self-center flex gap-7">
        <button
          className="text-sm"
          value="Orders"
          onClick={showLengend}>
          <span className="inline-block mr-1 w-[10px] h-[10px] rounded-full bg-primary"></span>{' '}
          Sales
        </button>
        <button
          className="text-sm"
          value="Sales"
          onClick={showLengend}>
          <span className="inline-block mr-1 w-[10px] h-[10px] rounded-full bg-success"></span>{' '}
          Orders
        </button>
      </div>
    </>
  )
}

export default SalesChart
