import React, { useEffect, useState } from 'react';
import { Form, Modal } from 'antd';
import { connect } from 'umi';
import AddVehicleForm from './Form/AddVehicleForm';

const AddVehicle = ({
  visible,
  setVisible,
  setIsFormEdit,
  isFormEdit,
  singleVehicleData,
  setAddVehicleModalVisible,
  getAllVehicles,
  setSingleVehicleData,
  form,
  vehicleImage,
  setVehicleImage,
  setAvail,
  avail,
}) => {
  return (
    <Modal
      title={
        <span style={{ color: '#10181e' }} className="font-medium">
          {singleVehicleData?._id ? 'Update Vehicle' : 'Add Vehicle'}
        </span>
      }
      open={visible}
      closable={false}
      okText="Submit"
      okButtonProps={{ type: 'primary', size: 'large' }}
      cancelButtonProps={{ size: 'large' }}
      okType=""
      width={900}
      footer={null}
    >
      <AddVehicleForm
        getAllVehicles={getAllVehicles}
        setAddVehicleModalVisible={setAddVehicleModalVisible}
        singleVehicleData={singleVehicleData}
        setSingleVehicleData={setSingleVehicleData}
        // vehicleData={vehicleData}
        setIsFormEdit={setIsFormEdit}
        isFormEdit={isFormEdit}
        visible={visible}
        setVisible={setVisible}
        form={form}
        vehicleImage={vehicleImage}
        setVehicleImage={setVehicleImage}
        setAvail={setAvail}
        avail={avail}
      />
    </Modal>
  );
};

export default connect(({}) => ({}))(AddVehicle);
