import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CachedIcon from '@mui/icons-material/Cached';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { csv, excel } from '../assets/index';
import TableComponent from './TableComponent';

const ManageConsumers = () => {
  return (
    <div className=' '>
      <div className='flex justify-between items-center pb-2'>
        <div className='relative inline-block w-[40%]'>
          <input
            type='text'
            placeholder='Search Consumers'
            className='h-10 w-[100%] border-[1px] border-[#B5C3D7]  bg-[#FFFFFF] text-base rounded-md pl-5 font-nunito outline-none'
          />
          <div className=' text-black flex justify-center items-center text-lg absolute top-2 right-2'>
            <SearchOutlinedIcon />
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <div className='h-[35px] pt-[5px] pb-[5px] pl-[7px] pr-[7px] bg-[#313945] text-white flex items-center justify-center rounded'>
            <CachedIcon sx={{ width: '24px', height: '24px' }} />
          </div>
          <div className=' flex items-center justify-center pt-[5px] pb-[5px] pl-[10px] pr-[10px] border-[1px] border-[#313945] h-[35px] rounded'>
            <img src={excel} alt='' />
          </div>
          <div className=' flex items-center justify-center pt-[5px] pb-[5px] pl-[10px] pr-[10px] border-[1px] border-[#313945] h-[35px] rounded'>
            <img src={csv} alt='' />
          </div>
          <div className='pt-[5px] pb-[5px] pl-[10px] pr-[10px] flex items-center justify-center bg-[#4DAEFF] text-white font-[Poppins] rounded text-sm h-[35px]'>
            <FilterAltIcon style={{ height: '20px' }} /> Filter
          </div>
        </div>
      </div>
      <TableComponent/>
    </div>
  );
};

export default ManageConsumers;
