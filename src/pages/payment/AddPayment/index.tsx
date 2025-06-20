import React from 'react';
import { Button, Col, Form, Modal, Popconfirm, Row, Upload, Input } from 'antd';
import { connect } from 'umi';

import Select from 'rc-select';
import { Payments, requiredStar } from '@/utils/AppIons';

const AddPayment = ({ dispatch, isAddModalVisible, setAddModalVisible }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // if(formData){
    dispatch({
      type: 'payments/addPayment',
      payload: {
        body: { ...values, postalCode: Number(values?.postalCode) },
      },
    }).then((res) => {
     
    });
    dispatch({
      type: '/addPayment',
      payload: {
        body: formData,
      },
    }).then(() => {
      setVisible(false);
      // console.log('res', res);
    });
  };

  return (
    <div>
      <Modal
        title={
          <span style={{ color: '#10181e' }} className="font-medium">
            {'Add payment'}
          </span>
        }
        open={isAddModalVisible}
        onCancel={() => setAddModalVisible(false)}
        okText="Submit"
        okButtonProps={{ type: 'primary', size: 'large' }}
        cancelButtonProps={{ size: 'large' }}
        width={900}
        footer={null}
      >
        <Form requiredMark={false} layout="vertical" form={form} onFinish={onFinish} name="payment">
          <div>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Fast Name</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="fastName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Fast Name!',
                    },
                  ]}
                >
                  <Input placeholder="Enter Fast Name" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Last Name</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Last Name!',
                    },
                  ]}
                >
                  <Input placeholder="Enter Last Name" size="large" className="w-full" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Email</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input email!',
                    },
                    {
                      pattern: new RegExp(/^[^ ]/),
                      message: 'Spaces not allowed',
                    },
                  ]}
                >
                  <Input placeholder="Enter Email ID" size="large" className="w-full" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Phone No.</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="phoneNo"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Phone No.!',
                    },
                    {
                      pattern: new RegExp(/^[^ ]/),
                      message: 'Spaces not allowed',
                    },
                  ]}
                >
                  <Input placeholder="Enter Phone No." size="large" className="w-full" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Lic. No</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="licNo"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Lic. No',
                    },
                    {
                      pattern: new RegExp(/^[^ ]/),
                      message: 'Spaces not allowed',
                    },
                  ]}
                >
                  <Input placeholder="Enter Lic. No" size="large" className="w-full" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Upload Document</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="uploadDocument"
                  rules={[
                    {
                      required: true,
                      message: 'Please Upload Document',
                    },
                    {
                      pattern: new RegExp(/^[^ ]/),
                      message: 'Spaces not allowed',
                    },
                  ]}
                >
                  <Input placeholder="Enter Upload Document" size="large" className="w-full" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Address</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Address!',
                    },
                  ]}
                >
                  <Input placeholder="Enter Address" size="large" className="w-full" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Total Amount</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="totalAmount"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Total Amount!',
                    },
                    {
                      pattern: new RegExp(/^[^ ]/),
                      message: 'Spaces not allowed',
                    },
                  ]}
                >
                  <Input placeholder="Enter Total Amount" size="large" className="w-full" />
                </Form.Item>
              </Col>
            </Row>

            <div className="flex justify-end gap-4">
              <Button size="large" onClick={() => setVisible(true)}>
                Cancel
              </Button>
              <Button type="primary" size="large" htmlType="submit">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
export default connect(({ payments }) => ({
  getPayment: payments?.paymentList,
}))(AddPayment);
