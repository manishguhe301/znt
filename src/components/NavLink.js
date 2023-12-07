import React from 'react';

const NavLink = ({ link }) => (
  <div
    key={link.label}
    className={`flex items-center mb-9 ${
      link.label === 'Consumers'
        ? 'bg-[#4DAEFF] h-[50px] ml-[-12px] mr-3 rounded-full p-3'
        : ''
    }`}
  >
    <div className='h-7 w-7 bg-[#fff] rounded-full flex items-center justify-center'>
      <img src={link.icon} alt={link.label} width={22} height={24} />
    </div>
    <p
      className={`ml-3 text-lg  font-[Lato] font-medium ${
        link.label === 'Consumers'
          ? ' text-[#fff] opacity-100 font-black'
          : 'text-[#000] opacity-[0.5]'
      }`}
    >
      {link.label}
    </p>
  </div>
);

export default NavLink;
