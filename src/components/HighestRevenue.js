import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BarAnimation from './Chart';

const HighestRevenue = () => {
  return (
    <div
      className='border-[1px] border-[#C6CEF0] rounded-lg bg-[#FEFFFF] p-2'
      style={{
        boxShadow:
          '0px 2.024px 3.442px 0px rgba(41, 72, 152, 0.01), 0px 8.908px 7.126px 0px rgba(41, 72, 152, 0.02), 0px 21.864px 14.212px 0px rgba(41, 72, 152, 0.03), 0px 42.109px 27.857px 0px rgba(41, 72, 152, 0.03), 0px 70.857px 51.219px 0px rgba(41, 72, 152, 0.04), 0px 109.322px 87.458px 0px rgba(41, 72, 152, 0.05)',
      }}
    >
      <div className='flex items-center justify-between'>
        <p className='text-base text-black font-[Lato]'>
          Highest Revenue Earned
        </p>
        <div
          className='flex items-center border-[1px] border-[#313945] rounded font-[Lato] text-sm text-[#313945]'
          style={{ padding: ' 5px 10px' }}
        >
          Top 5 <KeyboardArrowDownIcon />
        </div>
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
      <div className='mt-7 '>
        <BarAnimation />
      </div>
    </div>
  );
};

export default HighestRevenue;
