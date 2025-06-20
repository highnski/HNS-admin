import React, { useEffect, useState } from 'react';
import Icon, { DeleteOutlined, EyeOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  DatePicker,
  Space,
  Button,
  message,
  Modal,
  Upload,
  Popconfirm,
  Switch,
  Spin,
} from 'antd';
import { connect } from 'umi';
import { requiredStar } from '@/utils/AppIons';
import styles from './styles.less';
// import styles from './styles.less';

const AddVehicleForm = ({
  form,
  setVisible,
  dispatch,
  loading,
  singleVehicleData,
  setAddVehicleModalVisible,
  getAllVehicles,
  setSingleVehicleData,
  setVehicleImage,
  vehicleImage,
  setAvail,
  avail,
}) => {
  // const [vehicleImage, setVehicleImage] = useState({});
  const [viewImage, setViewImage] = useState({ visible: false, url: '' });
  // const [avail, setAvail] = useState(true);

  // console.log('singleVehicleData', singleVehicleData);
  const onChange = (checked) => {
    setAvail(checked);
  };

  const onFinish = (values) => {
    if (!vehicleImage?.file?.name) {
      return message.error('Please Upload vehicle image!');
    }
    const formData = new FormData();
    formData.append('vehicleName', values.vehicleName);
    formData.append('category', values.category);
    formData.append('seats', values?.seats);
    formData.append('luggageQuantity', values?.luggageQuantity);
    formData.append('fuelType', values?.fuelType);
    formData.append('description', values?.description);
    formData.append('vehicleImage', vehicleImage?.file);
    formData.append('imageName', vehicleImage?.file?.name);
    formData.append('priceTitle', values?.priceTitle);
    formData.append('price', values?.price);
    formData.append('availability', avail);

    if (formData) {
      dispatch({
        type: 'vehicles/addVehicles',
        payload: {
          body: formData,
        },
      }).then((res) => {
        if (res?.success === true) {
          form.resetFields('');
          setVisible(false);
          getAllVehicles();
          message.success('Vehicle added successfully');
          setVehicleImage('');
        }
      });
    }
  };

  const updateVehicle = (values) => {
    const formData = new FormData();
    formData.append('vehicleName', values.vehicleName);
    formData.append('category', values.category);
    formData.append('seats', values?.seats);
    formData.append('luggageQuantity', values?.luggageQuantity);
    formData.append('fuelType', values?.fuelType);
    formData.append('description', values?.description);
    if (vehicleImage?.file) {
      formData.append('vehicleImage', vehicleImage?.file);
    }
    formData.append('priceTitle', values?.priceTitle);
    formData.append('price', values?.price);
    formData.append('availability', avail);
    dispatch({
      type: 'vehicles/updateVehicle',
      payload: {
        body: formData,
        pathParams: {
          id: singleVehicleData?._id,
        },
      },
    }).then((ress) => {
      form.resetFields('');
      if (ress) {
        setAddVehicleModalVisible(false);
        setSingleVehicleData({});
        getAllVehicles();
        message.success('Vehicle Update Succesfully!');
      }
    });
  };

  const vehicleTypes = [
    { name: 'Executive Sedan (SEDAN)', value: 'SEDAN' },
    { name: 'First Class Sedan (SED)', value: 'SED' },
    { name: 'Luxury SUV (SUV)', value: 'SUV' },
    { name: 'Luxury Van (VAN)', value: 'VAN' },
    { name: 'People Mover (BUS)', value: 'BUS' },
    { name: 'Super Stretch (STR)', value: 'STR' },
    { name: 'Bus (ROSA BUS)', value: 'ROSA_BUS' },
  ];
  const fuelType = [
    { name: 'Petrol', value: 'Petrol' },
    { name: 'Diesel', value: 'Diesel' },
    { name: 'CNG', value: 'CNG' },
    { name: 'Electric', value: 'Electric' },
  ];

  const PriceDetails = [
    { name: 'day', value: 'daily' },
    { name: ' hour', value: 'hourly' },
    { name: ' week', value: 'weekly' },
  ];

  const formDataValues = (file) => {
    let newFile;

    newFile = {
      file,
      url: URL.createObjectURL(file),
    };

    setVehicleImage(newFile);
  };

  return (
    <>
      <Form
        // requiredMark={false}
        layout="vertical"
        form={form}
        onFinish={onFinish}
        name="addVehicle"
        // title={isFormEdit? 'Edit Vehicle' : 'eDIT Vehicle'}
      >
        <div>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                label={
                  <div>
                    <span className="formLabel mr-1">Vehicle Name</span>
                    <span>{requiredStar()}</span>
                  </div>
                }
                name="vehicleName"
                rules={[
                  {
                    required: true,
                    message: 'Please input vehicle name!',
                  },
                  {
                    pattern: new RegExp(/^[^ ]/),
                    message: 'Spaces not allowed',
                  },
                ]}
              >
                <Input placeholder="Enter vehicle name" size="large" autocomplete="off" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                label={
                  <div>
                    <span className="formLabel mr-1">Category</span>
                    <span>{requiredStar()}</span>
                  </div>
                }
                name="category"
                rules={[
                  {
                    required: true,
                    message: 'Please input vehicle category!',
                  },
                ]}
              >
                <Select placeholder="Select vehicle category" size="large">
                  {vehicleTypes?.map((element) => (
                    <Select.Option value={element?.value} key={element?.value}>
                      {element?.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                label={
                  <div>
                    <span className="formLabel mr-1">Seats</span>
                    <span>{requiredStar()}</span>
                  </div>
                }
                name="seats"
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
                    message: 'Please input vehicle capacity!',
                  },
                ]}
              >
                <Input
                  className={`${styles.input}`}
                  placeholder="Enter total Seats"
                  size="large"
                  autocomplete="off"
                  type="number"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                label={
                  <div>
                    <span className="formLabel">Luggage Quantity</span>
                    <span>{requiredStar()}</span>
                  </div>
                }
                name="luggageQuantity"
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
                    message: 'Please input luggage quantity!',
                  },
                ]}
              >
                <Input
                  className={`${styles.input}`}
                  size="large"
                  type="number"
                  value={''}
                  placeholder={'Enter total  quantity'}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                label={
                  <div>
                    <span className="formLabel mr-1">Fuel Type</span>
                    <span>{requiredStar()}</span>
                  </div>
                }
                name="fuelType"
                rules={[
                  {
                    required: true,
                    message: 'Please select Fuel Type!',
                  },
                ]}
              >
                <Select placeholder="Select fuel type" size="large">
                  {fuelType?.map((element) => (
                    <Select.Option value={element?.value} key={element?.value}>
                      {element?.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="flex w-full gap-4 items-center">
                <Form.Item
                  label={
                    <div>
                      <span className="formLabel mr-1">Price</span>
                      <span>{requiredStar()}</span>
                    </div>
                  }
                  name="priceTitle"
                  rules={[
                    {
                      required: true,
                      message: 'Please select price!',
                    },
                  ]}
                >
                  <Select placeholder="" size="large" className="" style={{ width: 140 }}>
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
                        message: 'Please enter price in number!',
                      },
                    ]}
                  >
                    <Input
                      className={`${styles.input}`}
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

            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Form.Item
                label={
                  <div>
                    <span className="formLabel mr-1">Description</span>
                    <span>{requiredStar()}</span>
                  </div>
                }
                name="description"
                rules={[
                  {
                    required: true,
                    message: 'Please input vehicle capacity!',
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Enter Description "
                  size="large"
                  autocomplete="off"
                  type="number"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={20} lg={20} xl={20}>
              <div className="">
                <div className="">
                  Upload vehicle image <span>{requiredStar()}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex mt-2">
                    <Upload
                      // disabled= "false"
                      showUploadList={false}
                      beforeUpload={async (content) => {
                        if (
                          content?.type !== 'image/png' &&
                          content?.type !== 'image/jpg' &&
                          content?.type !== 'image/jpeg'
                        ) {
                          return message.error(`image should be png/jpg/jpeg file`);
                        }
                        formDataValues(content);
                        return false;
                      }}
                      fileList={[vehicleImage]}
                    >
                      <Button type="primary" size="large">
                        <UploadOutlined className="text-xl font-extrabold " />
                      </Button>
                    </Upload>
                  </div>
                  <div className="">
                    {vehicleImage?.url?.length > 0 ? (
                      <div className="flex mt-2">
                        <div className="">{vehicleImage?.file?.name}</div>
                        <div className="flex mx-2 " style={{ float: 'right' }}>
                          <div className="mx-2">
                            <Button
                              type="primary"
                              shape="circle"
                              size="small"
                              onClick={() => {
                                setViewImage({ visible: true, url: vehicleImage?.url });
                              }}
                            >
                              <EyeOutlined className="text-xs " />
                            </Button>
                          </div>
                          <div className="mx-2">
                            {' '}
                            <Popconfirm
                              title="Are you sure you want to delete this attachment?"
                              onConfirm={() => {
                                setVehicleImage({});
                              }}
                              okText="Delete"
                              cancelText="Cancel"
                              okType="danger"
                            >
                              <Button type="primary" shape="circle" size="small" className="">
                                <DeleteOutlined className="text-xs fill-red-500" />
                              </Button>
                            </Popconfirm>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
              <Form.Item
                label={<span className="formLabel mr-10 ">Availability</span>}
                name="availability"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input vehicle capacity!',
                //   },
                // ]}
              >
                <Switch checked={avail} onChange={onChange} defaultChecked="YES" />
              </Form.Item>
            </Col>
          </Row>
          {/* <Spin spinning={loading} delay={300}> */}
          <div className="flex justify-end gap-4 border-t pt-6">
            <Button
              size="large"
              onClick={() => {
                setVisible(false);
                setVehicleImage({});
                setSingleVehicleData({});
                form.resetFields('');
              }}
            >
              Cancel
            </Button>
            {singleVehicleData?._id ? (
              <Button
                type="primary"
                size="large"
                loading={loading}
                onClick={(e) => updateVehicle(form.getFieldsValue('addVehicle'))}
              >
                Update
              </Button>
            ) : (
              <Button
                loading={loading}
                type="primary"
                size="large"
                htmlType="submit"
                // onClick={()=>console.log('first#$', form.getFieldsValue('addVehicle'))}
              >
                Submit
              </Button>
            )}
          </div>
          {/* </Spin> */}
          <Modal
            visible={viewImage?.visible}
            title="Preview Document"
            onCancel={() => {
              setViewImage({ visible: false, url: '' });
            }}
            footer={null}
          >
            <div className="flex justify-center">
              <img width={500} src={viewImage?.url} alt="" />
            </div>
          </Modal>
        </div>
      </Form>
    </>
  );
};

export default connect(({ vehicles, loading }) => ({
  addedVehicleRes: vehicles?.addedVehicleRes,
  loading: loading.effects[('vehicles/updateVehicle', 'vehicles/addVehicles')],
  loading: loading.effects['vehicles/updateVehicle'],
}))(AddVehicleForm);
