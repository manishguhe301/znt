import React, { useContext } from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import {
  communication,
  idCard,
  fluent_ticket,
  carbon_warning,
} from '../assets/index';
import { ManageConsumersContext } from '../context/ManageConsumersProvider';

const Hero = () => {
  const { isManageConsumersClicked, setIsManageConsumersClicked } = useContext(
    ManageConsumersContext
  );
  return (
    <div className='mt-5 flex gap-[10px]'>
      <div
        className='w-[45%] h-[153px]  rounded-xl  pt-4 pl-4  '
        style={{
          background:
            'linear-gradient(180deg, rgba(60, 190, 231, 0.05) 0%, rgba(99, 158, 227, 0.05) 100%)',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className=''>
          <div className='flex justify-between  items-center'>
            <div>
              <p className='font-[Lato] text-2xl text-black  font-medium mb-2'>
                Hello Shakir!
              </p>
              <p className='text-[#7B7B7E] text-sm font-normal font-[Lato]'>
                You have 134 consumers this week.
              </p>
            </div>
            <img src={communication} alt='communication' className='h-20' />
          </div>
          <div className='flex items-center gap-2 mt-4'>
            <button
              className=' text-[12px] rounded font-[Lato] font-semibold text-white h-9 flex justify-center items-center gap-2 bg-[#313945] border-[1px] border-[#313945]'
              style={{ padding: '5px 6px' }}
            >
              <PersonAddAlt1Icon />
              Add Consumers
            </button>
            <button
              className=' text-[12px] rounded font-[Lato] font-semibold text-[#313945] h-9 flex justify-center items-center gap-2 bg-[#fff] border-[1px] border-[#313945]'
              style={{ padding: '5px 6px' }}
              onClick={() => {
                setIsManageConsumersClicked(!isManageConsumersClicked);
              }}
            >
              <ManageAccountsIcon />
              Manage Consumers
            </button>
          </div>
        </div>
      </div>
      <div
        className='w-[20%] h-[153px] rounded-xl pl-[10px] pt-5 pr-2'
        style={{
          background:
            'linear-gradient(180deg, rgba(228, 168, 112, 0.05) 0%, rgba(180, 86, 0, 0.05) 100%)',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className='flex items-start'>
          <p className='font-[Lato] text-md '>
            <img src={idCard} alt='idCard' /> You have
            <span className='text-xl'> 276 </span>
            KYC approval pending{' '}
          </p>
        </div>
        <button className='bg-[#313945] pl-[10px] pr-[10px] pt-1 pb-1 rounded text-white mt-3 font-semibold'>
          View List
        </button>
      </div>
      <div
        className='w-[20%] h-[153px] rounded-xl pt-5 pr-2'
        style={{
          background:
            'linear-gradient(180deg, rgba(242, 146, 146, 0.05) 0%, rgba(193, 1, 1, 0.05) 100%)',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className='flex items-start'>
          <p className='font-[Lato] text-md '>
            <img src={carbon_warning} alt='idCard' />
            There are
            <span className='text-xl'> 182 </span>
            high risk consumers{' '}
          </p>
        </div>
        <button className='bg-[#313945] pl-[10px] pr-[10px] pt-1 pb-1 rounded text-white mt-3 font-semibold'>
          View List
        </button>
      </div>
      <div
        className='w-[20%] h-[153px] rounded-xl pt-5 pr-2'
        style={{
          background:
            'linear-gradient(180deg, rgba(132, 182, 255, 0.05) 0%, rgba(0, 70, 170, 0.05) 100%)',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className='flex items-start'>
          <p className='font-[Lato] text-md '>
            <img src={fluent_ticket} alt='idCard' />
            There are
            <span className='text-xl'> 32 </span>
            tickets open{' '}
          </p>
        </div>
        <button className='bg-[#313945] pl-[10px] pr-[10px] pt-1 pb-1 rounded text-white mt-3 font-semibold'>
          View List
        </button>
      </div>
    </div>
  );
};

export default Hero;
