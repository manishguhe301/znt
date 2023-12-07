import React from 'react';
import TotalConsumers from './TotalConsumers';
import EarningStatement from './EarningStatement';
import ConsumerAnalysis from './ConsumerAnalysis';
import HighestRevenue from './HighestRevenue';
import GreatestTransactions from './GreatestTransactions';

const ConsumerOverview = () => {
  return (
    <div className='flex gap-2'>
      <div className='flex-2 flex flex-col gap-3'>
        <TotalConsumers />
        <EarningStatement />
        <ConsumerAnalysis />
      </div>
      <div className='flex-1 flex flex-col gap-3'>
        <HighestRevenue />
        <GreatestTransactions/>
      </div>
    </div>
  );
};

export default ConsumerOverview;
