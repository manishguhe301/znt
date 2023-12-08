import React, { useState } from 'react';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

const data = Array.from({ length: 50 }, (_, index) => index + 1);

const itemsPerPage = 4;

const TableComponent = () => {
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      <div className='w-[100%] overflow-x-scroll max-h-[500px]'>
        <table className='w-[1360px] overflow-x-auto h-[500px]'>
          <thead className='h-[50px] bg-[#DDEBFF] p-5 font-[Lato] text-sm sticky top-0 z-50'>
            <th className='text-start pl-2 w-[169px]'>Consumer Name</th>
            <th className='text-start w-[250px]  '>
              <div className=''>
                <p>Assets</p>
                <div className='flex  items-center gap-2'>
                  <p className='font-[Lato] text-[10px] text-[#0153C9]'>
                    Total ~₹9M
                  </p>
                  <div className='flex items-center gap-1'>
                    <div
                      style={{
                        background:
                          'linear-gradient(180deg, #F8F3E0 0%, #E8D495 53.7%, #D1AC32 100%)',
                      }}
                      className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#866D1B]'
                    >
                      50.54g
                    </div>
                    <div
                      style={{
                        background:
                          'linear-gradient(180deg, #EAEAEA 0%, #ADADAD 98.5%)',
                      }}
                      className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#5B5B5B]'
                    >
                      34.2g{' '}
                    </div>
                    <div
                      style={{
                        background:
                          'linear-gradient(180deg, #F2FAFF 0%, #B2DDF5 100%)',
                      }}
                      className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#4CAEFF]'
                    >
                      ₹242.5{' '}
                    </div>
                  </div>
                </div>
              </div>
            </th>
            <th className='text-start w-[130px]'>
              Revenue
              <p className='font-[Lato] text-[10px] text-[#0153C9]'>
                Total ~₹9M
              </p>
            </th>
            <th className='text-start w-[136px]'>
              KYC Status
              <ArrowDropDownRoundedIcon />
            </th>
            <th className='text-start w-[230px]'>Facilitator</th>
            <th className='text-start w-[98px] '>
              Zone
              <ArrowDropDownRoundedIcon />
            </th>
            <th className='text-start w-[155px]'>
              Account Type
              <ArrowDropDownRoundedIcon />
            </th>
            <th className='text-start w-[190px]'>TPA</th>
          </thead>
          <tbody>
            {data.slice(startIndex, endIndex).map((item) => (
              <React.Fragment key={item}>
                <tr className=' h-[76px] '>
                  <td className='pl-2 text-[#0153C9] font-[Lato] text-sm'>
                    Raghuvendra Raga
                  </td>
                  <td className='font-[Lato] text-sm font-medium'>
                    ₹35,342
                    <div className='flex items-center gap-1'>
                      <div
                        style={{
                          background:
                            'linear-gradient(180deg, #F8F3E0 0%, #E8D495 53.7%, #D1AC32 100%)',
                        }}
                        className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#866D1B]'
                      >
                        50.54g
                      </div>
                      <div
                        style={{
                          background:
                            'linear-gradient(180deg, #EAEAEA 0%, #ADADAD 98.5%)',
                        }}
                        className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#5B5B5B]'
                      >
                        34.2g{' '}
                      </div>
                      <div
                        style={{
                          background:
                            'linear-gradient(180deg, #F2FAFF 0%, #B2DDF5 100%)',
                        }}
                        className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#4CAEFF]'
                      >
                        ₹242.5{' '}
                      </div>
                    </div>
                  </td>
                  <td className='font-[Lato] text-md font-medium'>₹35,342</td>
                  <td>
                    <div
                      style={{ padding: '4px 20px' }}
                      className='rounded-3xl text-sm w-[70%] flex items-center justify-center text-[Lato] text-[#27A607] bg-[#EAFFE0]'
                    >
                      Done
                    </div>
                  </td>
                  <td className=''>
                    <div className='flex items-center text-sm font-[Lato] gap-1'>
                      <div>
                        <span className='text-[10px] font-[Lato] block'>
                          B2B Field Executive
                        </span>
                        Arun Jha
                      </div>
                      <ArrowRightAltRoundedIcon sx={{ color: '#3896FF' }} />
                      <div>
                        <span className='text-[10px] font-[Lato] block'>
                          Associate
                        </span>
                        Anika Singh
                      </div>
                    </div>
                  </td>
                  <td className='font-[Lato] text-sm'>South</td>
                  <td className='font-[Lato] text-sm'>Business</td>
                  <td className='font-[Lato] text-sm'>9876543210@trucard</td>
                </tr>
                <tr className=' h-[76px] bg-[#F6FAFC]'>
                  <td className='pl-2 text-[#0153C9] font-[Lato] text-sm'>
                    Abhinav Loyal
                  </td>
                  <td className='font-[Lato] text-sm font-medium'>
                    ₹35,342
                    <div className='flex items-center gap-1'>
                      <div
                        style={{
                          background:
                            'linear-gradient(180deg, #F8F3E0 0%, #E8D495 53.7%, #D1AC32 100%)',
                        }}
                        className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#866D1B]'
                      >
                        50.54g
                      </div>
                      <div
                        style={{
                          background:
                            'linear-gradient(180deg, #EAEAEA 0%, #ADADAD 98.5%)',
                        }}
                        className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#5B5B5B]'
                      >
                        34.2g{' '}
                      </div>
                      <div
                        style={{
                          background:
                            'linear-gradient(180deg, #F2FAFF 0%, #B2DDF5 100%)',
                        }}
                        className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#4CAEFF]'
                      >
                        ₹242.5{' '}
                      </div>
                    </div>
                  </td>
                  <td className='font-[Lato] text-md font-medium'>₹35,342</td>
                  <td>
                    <div>
                      <p
                        className='rounded-3xl w-[70%] flex items-center justify-center text-[Lato] text-[#FF4444] text-sm bg-[#FFE9E9]'
                        style={{ padding: '4px 20px' }}
                      >
                        Pending
                      </p>
                      <p className='text-xs font-[Lato] pl-1'>Since 3 weeks</p>
                    </div>
                  </td>
                  <td className=''>
                    <div className='flex items-center text-sm font-[Lato] gap-1'>
                      <div>
                        <span className='text-[10px] font-[Lato] block'>
                          B2B Field Executive
                        </span>
                        Arun Jha
                      </div>
                      <ArrowRightAltRoundedIcon sx={{ color: '#3896FF' }} />
                      <div>
                        <span className='text-[10px] font-[Lato] block'>
                          Associate
                        </span>
                        Anika Singh
                      </div>
                    </div>
                  </td>
                  <td className='font-[Lato] text-sm'>South</td>
                  <td className='font-[Lato] text-sm'>
                    Pay and Use <span className='text-[#0153C9]'>(Minor)</span>
                  </td>
                  <td className='font-[Lato] text-sm'>9876543210@trucard</td>
                </tr>
              </React.Fragment>
            ))}
            <tr className=' h-[76px] '>
              <td className='pl-2 text-[#0153C9] font-[Lato] text-sm'>
                Raghuvendra Raga
              </td>
              <td className='font-[Lato] text-sm font-medium'>
                ₹35,342
                <div className='flex items-center gap-1'>
                  <div
                    style={{
                      background:
                        'linear-gradient(180deg, #F8F3E0 0%, #E8D495 53.7%, #D1AC32 100%)',
                    }}
                    className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#866D1B]'
                  >
                    50.54g
                  </div>
                  <div
                    style={{
                      background:
                        'linear-gradient(180deg, #EAEAEA 0%, #ADADAD 98.5%)',
                    }}
                    className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#5B5B5B]'
                  >
                    34.2g{' '}
                  </div>
                  <div
                    style={{
                      background:
                        'linear-gradient(180deg, #F2FAFF 0%, #B2DDF5 100%)',
                    }}
                    className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#4CAEFF]'
                  >
                    ₹242.5{' '}
                  </div>
                </div>
              </td>
              <td className='font-[Lato] text-lg font-medium'>₹35,342</td>
              <td>
                <div
                  style={{ padding: '4px 20px' }}
                  className='rounded-3xl text-sm w-[70%] flex items-center justify-center text-[Lato] text-[#27A607] bg-[#EAFFE0]'
                >
                  Done
                </div>
              </td>
              <td className=''>
                <div className='flex items-center text-sm font-[Lato] gap-1'>
                  <div>
                    <span className='text-[10px] font-[Lato] block'>
                      B2B Field Executive
                    </span>
                    Arun Jha
                  </div>
                  <ArrowRightAltRoundedIcon sx={{ color: '#3896FF' }} />
                  <div>
                    <span className='text-[10px] font-[Lato] block'>
                      Associate
                    </span>
                    Anika Singh
                  </div>
                </div>
              </td>
              <td className='font-[Lato] text-sm'>South</td>
              <td className='font-[Lato] text-sm'>Business</td>
              <td className='font-[Lato] text-sm'>9876543210@trucard</td>
            </tr>
            <tr className=' h-[76px] bg-[#F6FAFC]'>
              <td className='pl-2 text-[#0153C9] font-[Lato] text-sm'>
                Abhinav Loyal
              </td>
              <td className='font-[Lato] text-sm font-medium'>
                ₹35,342
                <div className='flex items-center gap-1'>
                  <div
                    style={{
                      background:
                        'linear-gradient(180deg, #F8F3E0 0%, #E8D495 53.7%, #D1AC32 100%)',
                    }}
                    className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#866D1B]'
                  >
                    50.54g
                  </div>
                  <div
                    style={{
                      background:
                        'linear-gradient(180deg, #EAEAEA 0%, #ADADAD 98.5%)',
                    }}
                    className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#5B5B5B]'
                  >
                    34.2g{' '}
                  </div>
                  <div
                    style={{
                      background:
                        'linear-gradient(180deg, #F2FAFF 0%, #B2DDF5 100%)',
                    }}
                    className='h-[18px] w-10 flex justify-center items-center text-[9px] rounded-full text-[#4CAEFF]'
                  >
                    ₹242.5{' '}
                  </div>
                </div>
              </td>
              <td className='font-[Lato] text-lg font-medium'>₹35,342</td>
              <td>
                <div>
                  <p
                    className='rounded-3xl w-[70%] flex items-center justify-center text-[Lato] text-[#FF4444] text-sm bg-[#FFE9E9]'
                    style={{ padding: '4px 20px' }}
                  >
                    Pending
                  </p>
                  <p className='text-xs font-[Lato] pl-1'>Since 3 weeks</p>
                </div>
              </td>
              <td className=''>
                <div className='flex items-center text-sm font-[Lato] gap-1'>
                  <div>
                    <span className='text-[10px] font-[Lato] block'>
                      B2B Field Executive
                    </span>
                    Arun Jha
                  </div>
                  <ArrowRightAltRoundedIcon sx={{ color: '#3896FF' }} />
                  <div>
                    <span className='text-[10px] font-[Lato] block'>
                      Associate
                    </span>
                    Anika Singh
                  </div>
                </div>
              </td>
              <td className='font-[Lato] text-sm'>South</td>
              <td className='font-[Lato] text-sm'>
                Pay and Use <span className='text-[#0153C9]'>(Minor)</span>
              </td>
              <td className='font-[Lato] text-sm'>9876543210@trucard</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Stack direction='row' justifyContent='center' alignItems='center' mt={3}>
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
          variant='outlined'
          shape='rounded'
        />
      </Stack>
    </div>
  );
};

export default TableComponent;
