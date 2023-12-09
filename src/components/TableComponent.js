import React, { useEffect, useState } from 'react';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { dummyData, getKycStatusStyle } from '../constants';
import Pagination from '@mui/material/Pagination';
import { Checkbox, Stack } from '@mui/material';

const itemsPerPage = 10;

const TableComponent = () => {
  const [page, setPage] = useState(1);
  const [isKycClicked, setIsKycClicked] = useState(false);
  const [isZoneClicked, setisZoneClicked] = useState(false);
  const [isAccountTypeClicked, setIsAccountTypeClicked] = useState(false);
  const [zone, setZone] = useState({
    south: false,
    north: false,
    east: false,
    west: false,
  });
  const [accountType, setAccountType] = useState({
    business: false,
    payAndUseMinor: false,
    payAndUseMajor: false,
    salary: false,
    earner: false,
  });
  const [state, setState] = useState({
    pending: false,
    inProgress: false,
    done: false,
    rejected: false,
  });

  const [filteredData, setFilteredData] = useState(dummyData);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setState((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleChangeZone = (event) => {
    const { name, checked } = event.target;
    setZone((prevZone) => ({ ...prevZone, [name]: checked }));
  };

  const handleChangeAccountType = (event) => {
    const { name, checked } = event.target;
    setAccountType((prevAccountType) => ({
      ...prevAccountType,
      [name]: checked,
    }));
  };

  useEffect(() => {
    filterData();
  }, [state, zone, accountType]);

  const filterData = () => {
    const hasCheckedStatus = Object.values(state).some((checked) => checked);
    const hasCheckedZone = Object.values(zone).some((checked) => checked);
    const hasCheckedAccountType = Object.values(accountType).some(
      (checked) => checked
    );

    const filtered = dummyData.filter((item) => {
      const statusFilter =
        !hasCheckedStatus ||
        (state.pending && item.kycStatus === 'Pending') ||
        (state.inProgress && item.kycStatus === 'In Progress') ||
        (state.done && item.kycStatus === 'Done') ||
        (state.rejected && item.kycStatus === 'Rejected');

      const zoneFilter =
        !hasCheckedZone ||
        (zone.south && item.zone === 'South') ||
        (zone.north && item.zone === 'North') ||
        (zone.east && item.zone === 'East') ||
        (zone.west && item.zone === 'West');

      const accountTypeFilter =
        !hasCheckedAccountType ||
        (accountType.business && item.accountType === 'Business') ||
        (accountType.payAndUseMinor &&
          item.accountType === 'Pay and Use(Minor)') ||
        (accountType.payAndUseMajor &&
          item.accountType === 'Pay and Use(Major)') ||
        (accountType.salary && item.accountType === 'Salary') ||
        (accountType.earner && item.accountType === 'Earner');

      return statusFilter && zoneFilter && accountTypeFilter;
    });

    setFilteredData(filtered);
    setPage(1);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      <div className='w-[100%] overflow-x-scroll max-h-[700px]'>
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
            <th className='text-start w-[130px] '>
              Revenue
              <p className='font-[Lato] text-[10px] text-[#0153C9]'>
                Total ~₹9M
              </p>
            </th>
            <th
              className='text-start w-[136px] cursor-pointer '
              onClick={(event) => {
                setIsKycClicked(!isKycClicked);
              }}
            >
              KYC Status
              <ArrowDropDownRoundedIcon />
              {isKycClicked && (
                <div
                  style={{
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    padding: '16px 8px',
                  }}
                  className='absolute h-[186px] w-[140px] bg-[#fff] flex flex-col items-start'
                >
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      name='pending'
                      checked={state.pending}
                      onChange={handleChange}
                      size='small'
                    />

                    <div
                      style={{ padding: '0px 16px' }}
                      className='rounded-3xl text-xs  flex items-center justify-center text-[Lato] text-[#FF4444] h-[24px] bg-[#FFE9E9]'
                    >
                      Pending
                    </div>
                  </div>
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      name='inProgress'
                      size='small'
                      checked={state.inProgress}
                      onChange={handleChange}
                    />
                    <div
                      style={{ padding: '0px 16px' }}
                      className='rounded-3xl  h-[24px] text-[10px]  flex items-center justify-center text-[Lato] text-[#DBA00A] bg-[#FFF2D0]'
                    >
                      In Progress
                    </div>
                  </div>
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      size='small'
                      name='done'
                      checked={state.done}
                      onChange={handleChange}
                    />
                    <div
                      style={{ padding: '0px 16px' }}
                      className='rounded-3xl  h-[24px] text-xs  flex items-center justify-center text-[Lato] text-[#27A607] bg-[#EAFFE0]'
                    >
                      Done
                    </div>
                  </div>{' '}
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      size='small'
                      name='rejected'
                      checked={state.rejected}
                      onChange={handleChange}
                    />
                    <div
                      style={{ padding: '0px 16px' }}
                      className='rounded-3xl  h-[24px] text-xs  flex items-center justify-center text-[Lato] text-[#8E8E8E] bg-[#F1F1F1]'
                    >
                      Rejected
                    </div>
                  </div>
                </div>
              )}
            </th>
            <th className='text-start w-[230px]'>Facilitator</th>
            <th
              className='text-start w-[98px] cursor-pointer'
              onClick={(event) => {
                setisZoneClicked(!isZoneClicked);
              }}
            >
              Zone
              <ArrowDropDownRoundedIcon />
              {isZoneClicked && (
                <div
                  style={{
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    padding: '16px 8px',
                  }}
                  className='absolute h-[186px] w-[140px] bg-[#fff] flex flex-col items-start'
                >
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      name='south'
                      checked={zone.south}
                      onChange={handleChangeZone}
                    />
                    South
                  </div>
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      name='north'
                      checked={zone.north}
                      onChange={handleChangeZone}
                    />
                    North
                  </div>
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      name='east'
                      checked={zone.east}
                      onChange={handleChangeZone}
                    />
                    East
                  </div>
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      name='west'
                      checked={zone.west}
                      onChange={handleChangeZone}
                    />
                    West
                  </div>
                </div>
              )}
            </th>
            <th
              className='text-start w-[155px] cursor-pointer'
              onClick={() => setIsAccountTypeClicked(!isAccountTypeClicked)}
            >
              Account Type
              <ArrowDropDownRoundedIcon />
              {isAccountTypeClicked && (
                <div
                  style={{
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    padding: '16px 8px',
                  }}
                  className='absolute h-[230px] w-[190px] bg-[#fff] flex flex-col items-start'
                >
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      name='business'
                      checked={accountType.business}
                      onChange={handleChangeAccountType}
                    />
                    Business
                  </div>
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      name='payAndUseMinor'
                      checked={accountType.payAndUseMinor}
                      onChange={handleChangeAccountType}
                    />
                    Pay and Use(Minor)
                  </div>
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      name='payAndUseMajor'
                      checked={accountType.payAndUseMajor}
                      onChange={handleChangeAccountType}
                    />
                    Pay and Use(Major)
                  </div>
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      name='salary'
                      checked={accountType.salary}
                      onChange={handleChangeAccountType}
                    />
                    Salary
                  </div>
                  <div
                    className='flex items-center'
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Checkbox
                      name='earner'
                      checked={accountType.earner}
                      onChange={handleChangeAccountType}
                    />
                    Earner
                  </div>
                </div>
              )}
            </th>
            <th className='text-start w-[190px]'>TPA</th>
          </thead>
          <tbody>
            {filteredData.slice(startIndex, endIndex).map((consumer, index) => (
              <React.Fragment key={consumer.consumerName}>
                <tr
                  className={` h-[76px] `}
                  style={{ background: `${index % 2 !== 0 ? '#F6FAFC' : ''}` }}
                >
                  <td className='pl-2 text-[#0153C9] font-[Lato] text-sm'>
                    {consumer.consumerName}
                  </td>
                  <td className='font-[Lato] text-sm font-medium'>
                    ₹{consumer.assets}
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
                  <td className='font-[Lato] text-md font-medium'>
                    ₹{consumer.revenue}
                  </td>
                  <td>
                    <div
                      style={{ padding: '4px 20px' }}
                      className={getKycStatusStyle(consumer.kycStatus)}
                    >
                      {consumer.kycStatus}
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
                  <td className='font-[Lato] text-sm'>{consumer.zone}</td>
                  <td className='font-[Lato] text-sm'>
                    {consumer.accountType}
                  </td>
                  <td className='font-[Lato] text-sm'>9876543210@trucard</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <Stack direction='row' justifyContent='center' alignItems='center' mt={3}>
        <Pagination
          count={Math.ceil(filteredData.length / itemsPerPage)}
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
