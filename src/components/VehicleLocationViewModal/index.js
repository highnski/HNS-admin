import React, { useState } from 'react';
import { Form, Input, Select, Row, Col, Image, Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
const VehicleLocationViewModal = ({ form, docImage }) => {
  return (
    <div>
      <Form
        // requiredMark={false}
        layout="vertical"
        form={form}
        // onFinish={onFinish}
        name="addVehicle"
      >
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              label={
                <div>
                  <span className="formLabel mr-1">Vehicle Pick Up Location</span>
                </div>
              }
              name="pickupLocation"
            >
              <Input
                placeholder="Enter User Address"
                size="large"
                autocomplete="off"
                disabled={true}
                style={{ color: 'black' }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default VehicleLocationViewModal;
