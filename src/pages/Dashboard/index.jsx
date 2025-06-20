import React, { useState, useEffect } from 'react';
import { connect, history } from 'umi';
import {
  RoadIcon,
  EarningsIcon,
  CarsIcon,
  Location,
  ContactUs,
  FormLink,
} from '../../assets/DashboardIcons/index';

const DashBoard = ({ dispatch }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [viewSize, setViewSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [vCount, setVCount] = useState('');
  const [uCount, setUCount] = useState('');
  const [locationCount, setLocationCount] = useState('');
  const [contactCount, setContactCount] = useState('');
  const [earningCount, setEarningCount] = useState('');
  const [formLinkBookingCount, setFormLinkBookingCount] = useState('');

  const getAllVehicles = () => {
    dispatch({
      type: 'vehicles/getAllVehicles',
      payload: {
        query: {},
      },
    }).then((VehicleCount) => {
      setVCount(VehicleCount?.totalCount);
    });
  };
  const getEarningRide = () => {
    dispatch({
      type: 'userDetails/getEarningRide',
      payload: {
        query: {},
      },
    }).then((res) => {
      setEarningCount(res?.totalEarnings.toFixed(2));
      // setVCount(VehicleCount?.totalCount);
    });
  };
  const getAllUser = () => {
    dispatch({
      type: 'userDetails/getAllUserDetails',
      payload: {
        query: {},
      },
    }).then((res) => {
      setUCount(res?.count);
    });
  };
  const getAllLocation = () => {
    dispatch({
      type: 'location/getAllLocation',
      payload: {
        query: {},
      },
    }).then((res) => {
      setLocationCount(res?.totalCount);
    });
  };
  const getAllContact = () => {
    dispatch({
      type: 'contact/getAllContact',
      payload: {
        query: {},
      },
    }).then((res) => {
      setContactCount(res?.totalCount);
    });
  };

  const getAllLinkBooking = () => {
    dispatch({
      type: 'bookingForm/getAllBookingForm',
      payload: {
        query: {
          startIndex,
          viewSize: viewSize,
          keyword: searchText,
        },
      },
    }).then((res) => {
      setFormLinkBookingCount(res?.totalCount);
    });
  };

  useEffect(() => {
    getAllVehicles();
    getAllUser();
    getAllLocation();
    getAllContact();
    getEarningRide();
    getAllLinkBooking();
  }, [startIndex, viewSize, searchText, currentPage]);

  const dashboardItems = [
    {
      id: 1,
      name: 'Users',
      total: uCount,
      icon: (
        <div
          style={{ backgroundColor: '#f5bae7 ' }}
          className="border px-2 py-1  rounded-md cursor-pointer "
          onClick={() => {
            history.push('./userDetails');
          }}
        >
          <RoadIcon />
        </div>
      ),
    },
    {
      id: 6,
      name: 'Form Link Booking',
      total: formLinkBookingCount,
      icon: (
        <div
          style={{ backgroundColor: '#FFEFC6' }}
          className=" px-2 py-1  rounded-md cursor-pointer "
          onClick={() => {
            history.push('./FormLinkBooking');
          }}
        >
          <FormLink />
        </div>
      ),
    },
    {
      id: 2,
      name: 'Earnings',
      total: <div className="">${earningCount}</div>,
      // "$"
      icon: (
        <div className=" bg-green-200 px-2 py-1  rounded-md ">
          <EarningsIcon />
        </div>
      ),
    },
    {
      id: 3,
      name: 'Vehicles',
      total: vCount,
      icon: (
        <div
          style={{ backgroundColor: '#FFEFC6' }}
          className="  px-2 py-1  rounded-md cursor-pointer "
          onClick={() => {
            history.push('./vehicles');
          }}
        >
          <CarsIcon />
        </div>
      ),
    },
    {
      id: 4,
      name: 'Location',
      total: locationCount,
      icon: (
        <div
          style={{ backgroundColor: '#b8e5f2' }}
          className=" px-2 py-1  rounded-md cursor-pointer "
          onClick={() => {
            history.push('./location');
          }}
        >
          <Location />
        </div>
      ),
    },
    {
      id: 5,
      name: 'Contact',
      total: contactCount,
      icon: (
        <div
          style={{ backgroundColor: '#b8e5f2' }}
          className=" px-2 py-1  rounded-md cursor-pointer "
          onClick={() => {
            history.push('./contact');
          }}
        >
          <ContactUs />
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sxl:grid-cols-4 mt-8 gap-3 ">
        {dashboardItems.map((data) => (
          <div
            className="shadow-white shadow-lg px-4"
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
              height: '130px',
              marginRight: '38px',
              marginLeft: '8px',
            }}
            key={data?.id}
          >
            <div className=" flex mt-6 mb-2 ">
              <p className="">{data?.icon}</p>
              <p className="md:font-semibold md:text-lg pl-2 mt-4">{data?.name}</p>
            </div>
            <p className="md:font-semibold text-lg text-right border-t pt-4 ">
              <span className=" mr-4 ">{data?.total}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(({ loading }) => ({}))(DashBoard);
