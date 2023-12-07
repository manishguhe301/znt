import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function BarAnimation() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  return (
    <div className='flex justify-center'>
      <BarChart
        height={350}
        series={series
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
        skipAnimation={skipAnimation}
      />
    </div>
  );
}

const highlightScope = {
  highlighted: 'series',
  faded: 'global',
};

const series = [
  {
    label: 'Transaction Amount',
    data: [
      2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
    ],
  },
  {
    label: 'Earnings',
    data: [
      2362, 2254, 1962, 1336, 586, 1069, 2194, 1629, 2173, 2031, 1757, 862,
      2446, 910, 2430, 2300, 805, 1835, 1684, 2197,
    ],
  },
].map((s) => ({ ...s, highlightScope }));

const GreatestTransactions = () => {
  return (
    <div
      className='border-[1px] border-[#C6CEF0] p-2 rounded-lg h-[100%]'
      style={{
        boxShadow:
          '0px 2.024px 3.442px 0px rgba(41, 72, 152, 0.01), 0px 8.908px 7.126px 0px rgba(41, 72, 152, 0.02), 0px 21.864px 14.212px 0px rgba(41, 72, 152, 0.03), 0px 42.109px 27.857px 0px rgba(41, 72, 152, 0.03), 0px 70.857px 51.219px 0px rgba(41, 72, 152, 0.04), 0px 109.322px 87.458px 0px rgba(41, 72, 152, 0.05)',
      }}
    >
      <div className='flex items-center justify-between'>
        <p className='text-base text-black font-[Lato]'>
          Highest Revenue Earned
        </p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <div className='pl-2 pt-1 pb-1 pr-2 h-[24px] border-[1px] border-[#313945] flex justify-center items-center rounded font-[Lato] text-[10px] text-[#313945] font-semibold'>
          Past Week
        </div>
        <div className='pl-2 pt-1 pb-1 pr-2 h-[24px] border-[1px] border-[#313945] flex justify-center items-center rounded font-[Lato] text-[10px] text-[#fff] bg-[#313945] font-semibold'>
          Past Month
        </div>
        <div className='pl-2 pt-1 pb-1 pr-2 h-[24px] border-[1px] border-[#313945] flex justify-center items-center rounded font-[Lato] text-[10px] text-[#313945] font-semibold'>
          Past Year
        </div>
        <div className='pl-2 pt-1 pb-1 pr-2 h-[24px] border-[1px] border-[#313945] flex justify-center items-center rounded font-[Lato] text-[10px] text-[#313945] font-semibold'>
          All Time
        </div>
      </div>
      <div className=' mt-9'>
        <BarAnimation />
      </div>
    </div>
  );
};

export default GreatestTransactions;
