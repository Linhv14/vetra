import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const SalesChart = () => {

  const chartData: ApexOptions = {
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

  return <ReactApexChart options={chartData} series={chartData.series} height={400} />;
};

export default SalesChart