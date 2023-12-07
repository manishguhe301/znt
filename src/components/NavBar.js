import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {
  notification,
  moneyBag,
  filesNotification,
  downArrow,
  notificationBell,
  flag,
  graph,
  trendUp,
  profile,
} from '../assets/index.js';

const arr = [moneyBag, notification, filesNotification, notificationBell];

const NavBar = () => {
  return (
    <div className='w-[100%] flex justify-between items-center'>
      <div className='relative inline-block'>
        <input
          type='text'
          placeholder='Search (Eg: Rewards)'
          className='h-12 w-72 bg-[#F6FAFC] text-base rounded-full pl-5 font-nunito outline-none'
        />
        <div className='h-10 w-10 bg-white rounded-full text-black flex justify-center items-center text-lg absolute top-1 right-1'>
          <SearchOutlinedIcon />
        </div>
      </div>
      <div className='flex'>
        <div className='flex items-center'>
          {arr.map((img, index) => (
            <img src={img} alt='img' key={index} className='mr-3' />
          ))}
        </div>
        <div className='h-20 w-64 bg-[#FEFEFF] rounded-xl border-[1px] border-[#C6CEF0] pt-4 pl-3 pb-4 pr-2 flex justify-between items-center'>
          <div>
            <p className='text-[#FC6B21] font-medium text-base font-[Poppins]'>
              Gold
            </p>
            <div className='h-6 w-14 border-[1px] border-[##C6CEF0] rounded-sm p-[2px] flex justify-evenly items-center'>
              <img src={flag} alt='flag' />
              <p className='font-[Poppins] text-[12px] font-normal'>IN</p>
              <img src={downArrow} alt='arrow' className='w-2 h-1' />
            </div>
          </div>
          <div>
            <img src={graph} alt='graph' width={50} />
            <p className='text-[#49E45F] text-[12px] font-[Poppins] mt-1'>
              +0.34%
            </p>
          </div>
          <div className='flex flex-col'>
            <p className='flex items-center text-[12px] font-medium mb-1'>
              Buy: ₹7,390.00{' '}
              <img src={trendUp} alt='₹7,090.00' className='ml-2' />
            </p>
            <p className='flex items-center text-[12px] font-medium mb-1'>
              Sell: ₹7,090.00{' '}
              <img src={trendUp} alt='₹7,090.00' className='ml-2' />
            </p>
          </div>
        </div>
        <div className='bg-[#F6FAFC] h-20 ml-[6px] w-28 flex justify-evenly items-center gap-3 p-3'>
          <img src={profile} alt='profile' className='h-14' />
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
