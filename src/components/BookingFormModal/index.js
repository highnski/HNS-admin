import React, { useState } from 'react';
import { Form, Input, Select, Row, Col, Image, Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
const BookingFormModal = ({ form, docImage }) => {
  const [signatureImage, setSignatureImage] = useState(false);
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
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              label={
                <div>
                  <span className="formLabel mr-1">First Name</span>
                </div>
              }
              name="firstName"
            >
              <Input
                placeholder="Enter vehicle name"
                size="large"
                autocomplete="off"
                disabled={true}
                style={{ color: 'black' }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              label={
                <div>
                  <span className="formLabel mr-1">Last Name</span>
                </div>
              }
              name="lastName"
            >
              <Input
                placeholder="Enter vehicle name"
                size="large"
                autocomplete="off"
                disabled={true}
                style={{ color: 'black' }}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              label={
                <div>
                  <span className="formLabel mr-1"> Address</span>
                </div>
              }
              name="address"
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
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <div className="flex">
              <span className="formLabel mr-1">Other Documents </span>
              <EyeOutlined
                className="mt-1 pl-1"
                onClick={() => {
                  setSignatureImage(docImage?.insuranceDoc?.url);
                }}
              />
            </div>
            {/* <Image src={docImage?.insuranceDoc?.url} width={150} /> */}
            <iframe src={docImage?.insuranceDoc?.url} width={200} />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <div className="flex">
              <span className="formLabel mr-1"> Documents of Lic</span>
              <EyeOutlined
                className="mt-1 pl-1"
                onClick={() => {
                  setSignatureImage(docImage?.licDoc?.url);
                }}
              />
            </div>

            <iframe src={docImage?.licDoc?.url} width={200} />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <div className="flex">
              <span className="formLabel mr-1"> Utility Bill</span>
              <EyeOutlined
                className="mt-1 pl-1"
                onClick={() => {
                  setSignatureImage(docImage?.utilityBillAndResidenceBillDoc?.url);
                }}
              />
            </div>
            <iframe src={docImage?.utilityBillAndResidenceBillDoc?.url} width={200} />
          </Col>
        </Row>
        <Modal
          // title="Preview E-Signature"
          open={signatureImage}
          closable={false}
          okText="Submit"
          okButtonProps={{ type: 'primary', size: 'large' }}
          cancelButtonProps={{ size: 'large' }}
          okType=""
          onCancel={() => {
            setSignatureImage(false);
          }}
          width={700}
          footer={null}
          preview="false"
        >
          <div className="flex justify-center">
            {' '}
            <iframe src={signatureImage} width={700} height={700} />
          </div>
        </Modal>
      </Form>
    </div>
  );
};

export default BookingFormModal;
