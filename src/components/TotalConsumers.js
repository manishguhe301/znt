import React from 'react';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

const TotalConsumers = () => {
  return (
    <div
      style={{
        boxShadow:
          '0px 2.024px 3.442px 0px rgba(41, 72, 152, 0.01), 0px 8.908px 7.126px 0px rgba(41, 72, 152, 0.02)',
      }}
      className='h-32 bg-[#FEFFFF] border-[1px] border-[#C6CEF0] w-[100%] rounded-lg flex items-center gap-2 '
    >
      <div className='w-[40%] bg-[#E2E6F7] h-[100%] flex justify-center items-center p-3 gap-2 rounded-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='90'
          height='86'
          viewBox='0 0 90 86'
          fill='none'
        >
          <path
            d='M44.9793 38.7C48.5032 38.7 51.8827 37.3409 54.3745 34.9217C56.8663 32.5025 58.2661 29.2213 58.2661 25.8C58.2661 22.3787 56.8663 19.0976 54.3745 16.6783C51.8827 14.2591 48.5032 12.9 44.9793 12.9C41.4554 12.9 38.0758 14.2591 35.584 16.6783C33.0923 19.0976 31.6924 22.3787 31.6924 25.8C31.6924 29.2213 33.0923 32.5025 35.584 34.9217C38.0758 37.3409 41.4554 38.7 44.9793 38.7ZM27.2635 34.4C27.2635 36.6809 26.3302 38.8683 24.669 40.4811C23.0079 42.094 20.7548 43 18.4056 43C16.0563 43 13.8033 42.094 12.1421 40.4811C10.4809 38.8683 9.54766 36.6809 9.54766 34.4C9.54766 32.1192 10.4809 29.9317 12.1421 28.3189C13.8033 26.7061 16.0563 25.8 18.4056 25.8C20.7548 25.8 23.0079 26.7061 24.669 28.3189C26.3302 29.9317 27.2635 32.1192 27.2635 34.4ZM7.2889 65.9018C6.53282 65.4846 5.96661 64.8059 5.70333 64.0012C4.92298 61.5473 4.91479 58.9232 5.67983 56.4647C6.44487 54.0063 7.9483 51.8255 9.99761 50.2017C12.0469 48.5778 14.5488 47.5848 17.1829 47.3498C19.817 47.1147 22.4634 47.6484 24.7833 48.8824C20.0161 53.4308 17.0323 59.4512 16.3461 65.9061C16.2442 66.8607 16.2841 67.8067 16.4568 68.7183C13.2244 68.447 10.0937 67.4852 7.2889 65.9018ZM73.5017 68.714C76.7338 68.444 79.8644 67.4837 82.6696 65.9018C83.424 65.4838 83.9886 64.8052 84.2508 64.0012C85.0324 61.5471 85.0415 58.9222 84.277 56.463C83.5125 54.0038 82.0091 51.8221 79.9596 50.1976C77.91 48.5731 75.4076 47.5797 72.7728 47.3446C70.1381 47.1095 67.491 47.6435 65.1708 48.8781C69.9422 53.4263 72.9293 59.4486 73.6169 65.9061C73.7155 66.8441 73.6768 67.7909 73.5017 68.7183V68.714ZM80.4109 34.4C80.4109 36.6809 79.4776 38.8683 77.8165 40.4811C76.1553 42.094 73.9022 43 71.553 43C69.2037 43 66.9507 42.094 65.2895 40.4811C63.6283 38.8683 62.6951 36.6809 62.6951 34.4C62.6951 32.1192 63.6283 29.9317 65.2895 28.3189C66.9507 26.7061 69.2037 25.8 71.553 25.8C73.9022 25.8 76.1553 26.7061 77.8165 28.3189C79.4776 29.9317 80.4109 32.1192 80.4109 34.4ZM24.1809 69.617C23.7441 69.2372 23.4055 68.763 23.1924 68.2326C22.9792 67.7023 22.8976 67.1307 22.9541 66.564C23.5174 61.2728 26.0811 56.3722 30.1496 52.8094C34.2181 49.2466 39.5025 47.2747 44.9815 47.2747C50.4604 47.2747 55.7448 49.2466 59.8133 52.8094C63.8818 56.3722 66.4455 61.2728 67.0089 66.564C67.0657 67.1307 66.9842 67.7024 66.7711 68.2328C66.558 68.7632 66.2191 69.2374 65.782 69.617C60.0873 74.6349 52.6696 77.4101 44.9793 77.4C37.2904 77.4094 29.8743 74.6343 24.1809 69.617Z'
            fill='#3C39B3'
          />
        </svg>
        <div>
          <p className='text-sm font-[Lato] text-[#313945 mb-3]'>
            Total Consumers
          </p>
          <span className='text-3xl font-semibold font-[Lato] text-[#313945] '>
            1,342
          </span>
        </div>
      </div>
      <div className='font-[Lato] text-[12px] '>
        <p className='text-[#313945] mb-4'>
          Direct Consumers
          <InfoRoundedIcon sx={{ color: '#3C39B2', height: '12px' }} />
        </p>
        <p className='text-[#313945]'>
          Through Associates
          <InfoRoundedIcon sx={{ color: '#3C39B2', height: '12px' }} />
        </p>
      </div>
      <div className='font-[Lato] font-medium text-[12px]'>
        <p className='mb-4'>342</p>
        <p>300</p>
      </div>
      <div className='font-[Lato] font-medium text-[12px]'>
        <p className='text-[#313945] mb-4'>
          Through Field Executives{' '}
          <InfoRoundedIcon sx={{ color: '#3C39B2', height: '12px' }} />
        </p>
        <p className='text-[#313945] '>
          Through Sales Executives{' '}
          <InfoRoundedIcon sx={{ color: '#3C39B2', height: '12px' }} />
        </p>{' '}
      </div>
      <div className='font-[Lato] font-medium text-[12px]'>
        <p className='mb-4'>400</p>
        <p>300</p>
      </div>
    </div>
  );
};

export default TotalConsumers;
