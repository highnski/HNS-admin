import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row, Input, message } from 'antd';
import { connect } from 'umi';
import { requiredStar } from '@/utils/AppIons';

const AddLocation = ({
  dispatch,
  setAddModalVisible,
  editLocation,
  setVisible,
  visible,
  form,
  setEditLocation,
  getAllLocation,
  loading,
}) => {
  const onFinish = (values) => {
    if (editLocation) {
      dispatch({
        type: 'location/updateLocation',
        payload: {
          body: { ...values, postalCode: Number(values?.postalCode) },
          pathParams: { id: editLocation },
        },
      }).then((res) => {
        getAllLocation();
        setAddModalVisible(false);
        form.resetFields('');
        message.success('Location Updated Succesfully!');
      });
    } else {
      dispatch({
        type: 'location/addLocation',
        payload: {
          body: { ...values, postalCode: Number(values?.postalCode) },
        },
      }).then((res) => {
        getAllLocation();
        setAddModalVisible(false);
        form.resetFields('');

        message.success('Location Added Succesfully!');
      });
    }
  };

  const postalCode = /^\d{4}$/;

  return (
    <div>
      <Modal
        title={
          <span style={{ color: '#10181e' }} className="font-medium">
            {editLocation ? 'Update Location' : 'Add Location'}
          </span>
        }
        closable={false}
        open={visible}
        // onCancel={() => {
        //   setAddModalVisible(false), setEditLocation('');
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
          name="location"
        >
          <div>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Address line 1</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="addressLine1"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter Address line 1!',
                    },
                    {
                      pattern: new RegExp(/^[^ ]/),
                      message: 'Spaces not allowed',
                    },
                  ]}
                >
                  <Input placeholder="Enter Address line 1" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Address line 2</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="addressLine2"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter Address line 2!',
                    },
                    {
                      pattern: new RegExp(/^[^ ]/),
                      message: 'Spaces not allowed',
                    },
                  ]}
                >
                  <Input placeholder="Enter Address line 2" size="large" className="w-full" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Postal code</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="postalCode"
                  rules={[
                    () => ({
                      validator(_, value) {
                        if (value < 0) {
                          return Promise.reject(new Error('number should not be negative'));
                        }
                        return Promise.resolve();
                      },
                    }),
                    {
                      required: true,
                      message: 'Please enter postal code',
                    },
                    {
                      pattern: postalCode,
                      message: 'Postal code four number only',
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter Postal code"
                    size="large"
                    className="w-full input"
                    type="Number"
                    min="0"

                    // onChange={handleBeforeChange}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">City</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter city name!',
                    },
                    {
                      pattern: new RegExp(/^[^ ]/),
                      message: 'Spaces not allowed',
                    },
                  ]}
                >
                  <Input placeholder="Enter City name" size="large" className="w-full" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Country</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter country name!',
                    },
                    {
                      pattern: new RegExp(/^[^ ]/),
                      message: 'Spaces not allowed',
                    },
                  ]}
                >
                  <Input placeholder="Enter Country name" size="large" className="w-full" />
                </Form.Item>
              </Col>
            </Row>

            <div className="flex justify-end gap-4">
              <Button
                size="large"
                onClick={() => {
                  setVisible(false);
                  setEditLocation('');
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
                {editLocation ? 'Update' : 'Submit'}
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
export default connect(({ location, loading }) => ({
  // getLocation: location?.locationList
  loading: loading.effects[('location/updateLocation', 'location/addLocation')],
}))(AddLocation);
