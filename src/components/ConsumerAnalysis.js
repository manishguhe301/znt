import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Number Of Consumers',
    },
  ],
  width: 600,
  height: 400,
  background: 'linear-gradient(180deg, #3CBEE7 0%, #639EE3 100%)',
};

const dataset = [
  {
    seoul: 41,
    month: 'Very Active ',
  },
  {
    seoul: 28,
    month: 'Moderately Active',
  },
  {
    seoul: 11,
    month: 'Least Active',
  },
];

const valueFormatter = (value) => `${value}`;

const ConsumerAnalysis = () => {
  return (
    <div
      className='mt-5 bg-[#FEFFFF] pl-4 pt-6 border-[1px] border-[#C6CEF0] rounded-lg'
      style={{
        boxShadow:
          '0px 2.024px 3.442px 0px rgba(41, 72, 152, 0.01), 0px 8.908px 7.126px 0px rgba(41, 72, 152, 0.02), 0px 21.864px 14.212px 0px rgba(41, 72, 152, 0.03), 0px 42.109px 27.857px 0px rgba(41, 72, 152, 0.03), 0px 70.857px 51.219px 0px rgba(41, 72, 152, 0.04), 0px 109.322px 87.458px 0px rgba(41, 72, 152, 0.05);',
      }}
    >
      <p className='font-[Lato] text-lg'>Consumer Analysis</p>
      <div className='mt-6 flex justify-between pr-2'>
        <div className='flex items-center gap-5'>
          <div className='flex flex-col items-center'>
            <p className='font-[Lato] text-base font-bold text-[#3896FF]'>
              Activity
            </p>
            <div className='h-[2px] bg-[#3896FF] w-20'></div>
          </div>
          <p className='font-[Lato] text-base font-bold '>Stock</p>
          <p className='font-[Lato] text-base font-bold '>Volume</p>
        </div>
        <div className='flex items-center gap-2'>
          <div className='pl-2 pt-1 pb-1 pr-2 h-[35px] border-[1px] border-[#313945] flex justify-center items-center rounded font-[Lato] text-xs text-[#313945] font-semibold'>
            Past Week
          </div>
          <div className='pl-2 pt-1 pb-1 pr-2 h-[35px] border-[1px] border-[#313945] flex justify-center items-center rounded font-[Lato] text-xs text-[#fff] bg-[#313945] font-semibold'>
            Past Month
          </div>
          <div className='pl-2 pt-1 pb-1 pr-2 h-[35px] border-[1px] border-[#313945] flex justify-center items-center rounded font-[Lato] text-xs text-[#313945] font-semibold'>
            Past Year
          </div>
          <div className='pl-2 pt-1 pb-1 pr-2 h-[35px] border-[1px] border-[#313945] flex justify-center items-center rounded font-[Lato] text-xs text-[#313945] font-semibold'>
            All Time
          </div>
        </div>
      </div>
      <hr className='bg-[#E2E6F7] mb-3 mr-3 ' />
      <div className='flex items-center gap-2 justify-end pr-2'>
        <div className='pl-2 pt-1 pb-1 pr-2 h-[35px] border-[1px] border-[#313945] flex justify-center items-center rounded font-[Lato] text-xs text-[#313945] font-semibold'>
          Filter By associates
          <KeyboardArrowDownIcon />
        </div>
        <div className='pl-2 pt-1 pb-1 pr-2 h-[35px] border-[1px] border-[#313945] flex justify-center items-center rounded font-[Lato] text-xs text-[#313945] font-semibold'>
          Filter By Zone
          <KeyboardArrowDownIcon />
        </div>
        <div className='pl-2 pt-1 pb-1 pr-2 h-[35px] border-[1px] border-[#313945] flex justify-center items-center rounded font-[Lato] text-xs text-[#313945] font-semibold'>
          Filter By Account Type
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className='pb-5 flex items-center'>
        <BarChart
          dataset={dataset}
          yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
          series={[
            {
              dataKey: 'seoul',
              label: 'Active Consumers',
              valueFormatter,
            },
          ]}
          layout='horizontal'
          {...chartSetting}
        />
      </div>
    </div>
  );
};

export default ConsumerAnalysis;
