import React from 'react';

const StockGram = ({ stock }) => (
  <div
    className='flex justify-between items-center mb-3'
    key={stock.name}
  >
    <div>
      <p className='font-[Lato]   font-semibold m-0 text-sm'>
        TruCoin{' '}
        <span className='text-[#FC6B21] text-sm'>{stock.name}</span>
      </p>
      <p className='text-[#5ABF41] font-medium m-0 text-sm'>
        $6.18(+1.82%)
      </p>
    </div>
    <div>
      <p className='font-[Lato] m-0  font-semibold text-sm'>
        {stock.gm}k gm
      </p>
    </div>
  </div>
);

export default StockGram;
