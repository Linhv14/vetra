import React from 'react'
import Tooltip from '../Tooltip'
import ChartOption from './ChartOption'
import dynamic from 'next/dynamic'
const SalesChart = dynamic(() => import('@/components/Charts/SalesChart'), {
  ssr: false,
})
const SalesChartCard = () => {
  return (
    <>
      <div className="flex gap-x-2 items-center mb-5">
        <h3 className="text-[18px] font-medium cursor-text">Sales Chart</h3>
        <Tooltip text="Daily orders and sales" />
        <div className="ml-auto relative">
          <ChartOption chartID="sales" />
        </div>
      </div>
      <div className="cheron"></div>
      <div className="bg-white w-full relative p-[24px] flex flex-col grow rounded-xl">
        <div className="flex items-center gap-4 flex-wrap">
          <i className="bi bi-bag-check text-success text-2xl sm:text-3xl effect-linear"></i>
          <div className="text-black text-2xl sm:text-[34px] effect-linear">$15.552,40</div>
          <div className="text-success text-sm">
            <i className="bi bi-arrow-up"></i> 8.30%
          </div>
          <select
            defaultValue={'02 October 2021'}
            name="sales-date-picker"
            id="sales-date-picker"
            title="Sales Date Picker"
            className="ml-auto border border-light-border p-3 rounded-lg  appearance-none text-sm dropdown-selector w-full sm:w-36">
            <optgroup label="2021">
              <option
                className="text-sm"
                value="02 October 2021">
                October
              </option>
              <option
                className="text-sm"
                value="02 November 2021">
                November
              </option>
              <option
                className="text-sm"
                value="02 December 2021">
                December
              </option>
            </optgroup>
            <optgroup label="2022">
              <option
                className="text-sm"
                value="02 January 2022">
                January
              </option>
              <option
                className="text-sm"
                value="02 February 2022">
                February
              </option>
              <option
                className="text-sm"
                value="02 March 2022">
                March
              </option>
              <option
                className="text-sm"
                value="02 April 2022">
                April
              </option>
              <option
                className="text-sm"
                value="02 May 2022">
                May
              </option>
              <option
                className="text-sm"
                value="02 June 2022">
                June
              </option>
              <option
                className="text-sm"
                value="02 July 2022">
                July
              </option>
              <option
                className="text-sm"
                value="02 August 2022">
                August
              </option>
              <option
                className="text-sm"
                value="02 September 2022">
                September
              </option>
              <option
                className="text-sm"
                value="02 October 2022">
                October
              </option>
              <option
                className="text-sm"
                value="02 November 2022">
                November
              </option>
              <option
                className="text-sm"
                value="02 December 2022">
                December
              </option>
            </optgroup>
          </select>
        </div>
        <SalesChart />
      </div>
    </>
  )
}

export default SalesChartCard