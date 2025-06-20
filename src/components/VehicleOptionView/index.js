import React, { useState } from 'react';
import { Form, Input, Select, Row, Col, Image, Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
const VehicleOptionView = ({ form, getOptionData }) => {
  return (
    <div>
      {getOptionData?.optionData?.length === 0 ? (
        <div className="flex justify-center py-10"> No Vehicle option </div>
      ) : (
        <div>
          {getOptionData?.optionData?.map((item) => (
            <div key={item.id} className="py-4 border px-2">
              <p className=" text-lg pt-2">
                Option Name:
                <span className="text-sm text-black break-words pl-2">{item?.name}</span>{' '}
              </p>
              <div className="flex justify-center py-4 text-xl">
                <p className=" ">
                  Quantity:<span className="text-xl pl-2">{item?.quantity}</span>{' '}
                </p>
                <p className="ml-10">
                  Price:<span className="text-xl pl-2">$ {item?.optionDetails?.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleOptionView;
