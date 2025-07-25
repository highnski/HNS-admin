import React from 'react';

import { Col, Row } from 'antd';
import bgImg from '@/assets/background-image.svg';
import logo from '@/assets/SiderIcons/HighNsky_Logo-1-removebg-preview-p-500.png';

const UserAuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen overflow-y-auto">
      <Row className="h-full w-full">
        <Col xs={0} sm={0} md={0} lg={12} xl={12} className="h-full">
          <div
            style={
              {
                // backgroundImage: `url(${bgImg})`,
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
              }
            }
            className="bg-white h-full flex flex-col items-center justify-center mx-auto"
          >
            <img src={logo} alt="City Taxis Sunraysia" className="h-32" />
            <div className="text-center">
              <div style={{ color: '#126E32' }} className="text-4xl pb-6 font-bold "></div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} className="h-full self-center">
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default UserAuthLayout;
