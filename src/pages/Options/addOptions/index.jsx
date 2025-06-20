import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Row, Col, Button, message, Modal } from 'antd';
import { connect } from 'umi';
import { requiredStar } from '@/utils/AppIons';
import style from '../style.less';

const AddOptions = ({
  editVehicleOption,
  setEditVehicleOption,
  form,
  setVisible,
  dispatch,
  setAddModalVisible,
  getAllOption,
  visible,
}) => {
  const onFinish = (values) => {
    if (editVehicleOption) {
      dispatch({
        type: 'option/updateVehicleOption',
        payload: {
          body: { ...values, price: Number(values?.price) },
          pathParams: { id: editVehicleOption },
        },
      }).then((res) => {
        setAddModalVisible(false);
        getAllOption();
        form.resetFields('');
        message.success('Vehicle Option Updated Succesfully!');
      });
    } else
      dispatch({
        type: 'option/addOption',
        payload: {
          body: { ...values, price: Number(values?.price) },
        },
      }).then((res) => {
        getAllOption();
        setAddModalVisible(false);
        form.resetFields();
        message?.success('Vehicle options added successfully');
      });
  };

  const PriceDetails = [
    { name: 'Per Day', value: 'Per Day' },
    { name: 'Per Hour', value: 'Per Hour' },
    { name: 'Per Week', value: 'Per Week' },
  ];

  return (
    <div>
      <Modal
        title={
          <span style={{ color: '#10181e' }} className="font-medium">
            {editVehicleOption ? 'Update Vehicle Options' : ' Add Vehicle Options'}
          </span>
        }
        closable={false}
        open={visible}
        // onCancel={() => {
        //   setAddModalVisible(false);
        // }}
        okText="Submit"
        okButtonProps={{ type: 'primary', size: 'large' }}
        cancelButtonProps={{ size: 'large' }}
        width={900}
        footer={null}
      >
        <Form
          requiredMark={false}
          layout="vertical"
          form={form}
          onFinish={onFinish}
          name="options"
          // title={isFormEdit? 'Edit Vehicle' : 'eDIT Vehicle'}
        >
          <div>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Vehicle Options</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="option"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter options!',
                    },
                    {
                      pattern: new RegExp(/^[^ ]/),
                      message: 'Spaces not allowed',
                    },
                  ]}
                >
                  <Input placeholder="Enter options" size="large" autocomplete="off" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={6}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="flex w-full gap-4 items-center">
                  <Form.Item
                    label={
                      <div>
                        <span className="formLabel mr-1">Price</span>
                        <span>{requiredStar()}</span>
                      </div>
                    }
                    name="priceType"
                    rules={[
                      {
                        required: true,
                        message: 'Please select !',
                      },
                    ]}
                  >
                    <Select
                      placeholder=""
                      size="large"
                      className=""
                      style={{ width: 140 }}
                      defaultValue={'Select'}
                    >
                      {PriceDetails?.map((element) => (
                        <Select.Option value={element?.value} key={element?.value}>
                          {element?.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <div className="mt-8">
                    <Form.Item
                      name="price"
                      rules={[
                        () => ({
                          validator(_, value) {
                            if (value <= 0) {
                              return Promise.reject(new Error('number should not be negative'));
                            }
                            return Promise.resolve();
                          },
                        }),
                        {
                          required: true,
                          message: 'Please enter price!',
                        },
                      ]}
                    >
                      <Input
                        className={`${style.input}`}
                        // prefix="$"
                        size="large"
                        type="number"
                        // className="w-full mt-8"
                        placeholder="$ Enter Price"
                      />
                    </Form.Item>
                  </div>
                </div>
              </Col>
              {/* <Col xs={24} sm={24} md={8} lg={8} xl={8}>
               <div className="mt-8">
                    <Form.Item name="priceDaily">
                      <Input
                        className={`${style.input}`}
                        // prefix="$"
                        size="large"
                        type="number"
                        // className="w-full mt-8"
                        placeholder="$ Enter Price Daily"
                      />
                    </Form.Item>
                  </div>
               </Col>
               <Col xs={24} sm={24} md={8} lg={8} xl={8}>
               <div className="mt-8">
                    <Form.Item name="priceWeekly">
                      <Input
                        className={`${style.input}`}
                        // prefix="$"
                        size="large"
                        type="number"
                        // className="w-full mt-8"
                        placeholder="$ Enter Price Weekly"
                      />
                    </Form.Item>
                  </div>
               </Col>
               <Col xs={24} sm={24} md={8} lg={8} xl={8}>
               <div className="mt-8">
                    <Form.Item name="priceHourly">
                      <Input
                        className={`${style.input}`}
                        // prefix="$"
                        size="large"
                        type="number"
                        // className="w-full mt-8"
                        placeholder="$ Enter Price Hourly"
                      />
                    </Form.Item>
                  </div>
               </Col> */}
            </Row>

            <div className="flex justify-end gap-4">
              <Button
                size="large"
                onClick={() => {
                  setVisible(false);
                  setEditVehicleOption('');
                  // singleLocation();
                  form.resetFields('');
                }}
              >
                Cancel
              </Button>

              <Button
                type="primary"
                size="large"
                onClick={() => {
                  form.submit();
                }}
              >
                {editVehicleOption ? 'Update' : 'Submit'}
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
export default connect(({ Option }) => ({
  // getLocation: location?.locationList
}))(AddOptions);
