import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import { ManageConsumersContext } from '../context/ManageConsumersProvider';
import ManageConsumers from '../components/ManageConsumers';
import ConsumerOverview from '../components/ConsumerOverview';

const RightSection = () => {
  const { isManageConsumersClicked } = useContext(ManageConsumersContext);
  return (
    <div className='p-8 w-[100%] overflow-scroll '>
      <NavBar />
      <Hero />
      <p className='font-[Lato] text-lg font-medium mb-3 mt-6'>
        Consumers Overview
      </p>
      {isManageConsumersClicked ? <ManageConsumers /> : <ConsumerOverview />}
    </div>
  );
};

export default RightSection;
