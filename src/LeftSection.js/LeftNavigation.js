import React from 'react';
import logo from '../assets/logo.svg';
import navLinks from '../constants/index';
import { stockGrams } from '../constants/index';
import dollarBagIcon from '../assets/dollarBagIcon.svg';
import NavLink from '../components/NavLink';
import StockGram from '../components/StockGram';

const LeftNavigation = () => {
  return (
    <div className='w-[260px] bg-[#F6FAFC] p-1'>
      <img src={logo} alt='logo' className='ml-6 pt-12' />
      <div className='mt-16 ml-6 cursor-pointer'>
        {navLinks.map((link) => (
          <NavLink link={link} key={link.label} />
        ))}
      </div>
      <div className='mt-16 ml-6 pb-24'>
        <p className='opacity-[0.7] text-black font-[Lato] text-lg font-medium mb-2'>
          Your Stock
        </p>
        <div
          className='w-[225px] h-[135px] opacity-90 relative'
          style={{
            background: 'linear-gradient(180deg, #3CBEE7 0%, #639EE3 100%)',
            borderRadius: '0px 15px 15px 15px',
            padding: '14px 9px 14px 24px',
          }}
        >
          <img
            src={dollarBagIcon}
            alt='dollarBagIcon'
            className='absolute top-1 left-0.5'
          />
          <div className='h-28 w-48 bg-[#FFFFFF] rounded-lg pl-4 pt-4 pr-2'>
            {stockGrams.map((stock) => (
              <StockGram stock={stock} key={stock.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavigation;
