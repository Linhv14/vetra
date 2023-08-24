import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const ChanelsChart = () => {

  const chanelsChartOpt: ApexOptions = {
    chart: {
      id: 'chanels',
      type: 'donut',
      toolbar: {
        show: false
      },
    },
    series: [48, 30, 22],
    labels: ['Social Media', 'Google', 'Email'],
    colors: ['#fd7e14', '#0dcaf0', '#6610f2'],
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      style: {
        fontSize: '18px',
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: '35%',
        },
        expandOnClick: false
      }
    }
  };

  return (
    <ReactApexChart
      options={chanelsChartOpt}
      series={chanelsChartOpt.series}
      height={300}
      type='donut'
    />
  );
};

export default ChanelsChart;
