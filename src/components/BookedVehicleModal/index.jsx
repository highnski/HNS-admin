import React from 'react';
import { Form, Input, Row, Col, Image } from 'antd';

const BookedVehicleModal = ({ form, vehicleImage }) => {
  return (
    <div>
      <Form layout="vertical" form={form} name="addVehicle">
        <div className="flex justify-center">
          <div className="">
            <div>
              <span className="formLabel ml-20 pb-4">Vehicle Image</span>
            </div>
            <Image src={vehicleImage?.url} width={250} />
          </div>
        </div>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              label={
                <div>
                  <span className="formLabel mr-1">Vehicle Name</span>
                </div>
              }
              name="vehicleName"
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
                  <span className="formLabel mr-1">Category</span>
                </div>
              }
              name="category"
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
                  <span className="formLabel mr-1">Seats</span>
                </div>
              }
              name="seats"
            >
              <Input
                // className={`${styles.input}`}
                placeholder="Enter total Seats"
                size="large"
                autocomplete="off"
                type="number"
                disabled={true}
                style={{ color: 'black' }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              label={
                <div>
                  <span className="formLabel">Luggage Quantity</span>
                </div>
              }
              name="luggageQuantity"
            >
              <Input
                size="large"
                type="number"
                value={''}
                placeholder={'Enter total  quantity'}
                disabled={true}
                style={{ color: 'black' }}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              label={
                <div>
                  <span className="formLabel mr-1">Fuel Type</span>
                </div>
              }
              name="fuelType"
            >
              <Input
                placeholder="Enter fuel type"
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
                  <span className="formLabel mr-1">Price</span>
                </div>
              }
              name="price"
            >
              <Input
                placeholder="Enter pricee"
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

export default BookedVehicleModal;
