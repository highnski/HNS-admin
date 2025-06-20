import { AutoComplete, Checkbox, Form, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import addressData from '../../../../../public/au.json';
import { connect } from 'umi';
import {
  Button,
  Input,
  Select,
  Row,
  Col,
  Dropdown,
  DatePicker,
  Space,
  Menu,
  Tabs,
  Radio,
  TimePicker,
} from 'antd';
import { CompassOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Option } from 'antd/lib/mentions';
import Icon from '@ant-design/icons/lib/components/Icon';
import { requiredStar } from '@/utils/AppIons';
import { Children } from 'react';
import PlaceComponent from '@/components/PlaceComponent';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Axios from 'axios';
const CreateRide = ({
  dispatch,
  handleCancel,
  loadingForUpload,
  form,
  handleOk,
  chauffeurList,
  pickupLocation,
  dropLocation,
  // chauffeurId,
  // setChauffeurId,
  setpickupLocation,
  setDropLocation,
  addStop,
  setAddStop,
}) => {
  const [rideTypes, setRideTypes] = useState('');
  const [luggageQuantity, setLuggageQuantity] = useState(0);
  const { inputRef } = useRef(null);
  const [optionss, setOptionss] = useState([]);
  // const [pickUp, setpickUp] = useState('');
  useEffect(() => {
    dispatch({
      type: 'chauffeur/getAllChauffeur',
      payload: {
        query: {
          assignRide: true,
        },
      },
    });
  }, [form]);

  const googleApi = 'AIzaSyDyAUx_-daxFtklRMBcgH5_BWEEpjq_hdo';

  useEffect(() => {}, [addStop]);

  const passengers = [
    { name: '01', value: '01' },
    { name: '02', value: '02' },
    { name: '03', value: '03' },
    { name: '04', value: '04' },
    { name: '05', value: '05' },
    { name: '06', value: '06' },
  ];
  const childSeats = [
    { name: '00', value: '00' },
    { name: '01', value: '01' },
    { name: '02', value: '02' },
    { name: '03', value: '03' },
    { name: '04', value: '04' },
    { name: '05', value: '05' },
    { name: '06', value: '06' },
  ];

  const vehicleTypes = [
    { name: 'Executive Sedan (SEDAN)', value: 'SEDAN' },
    { name: 'First Class Sedan (SED)', value: 'SED' },
    { name: 'Luxury SUV (SUV)', value: 'SUV' },
    { name: 'Luxury Van (VAN)', value: 'VAN' },
    { name: 'People Mover (BUS)', value: 'BUS' },
    { name: 'Super Stretch (STR)', value: 'STR' },
    { name: 'Bus (ROSA BUS)', value: 'ROSA_BUS' },
  ];
  const paymentType = [
    { name: 'Per Km', value: 'perKm' },
    { name: 'Per Hour', value: 'perHour' },
  ];
  const rideType = [
    { name: 'Point-To-Point', value: 'Point-To-Point' },
    { name: 'Airport Pickup', value: 'Airport-Pickup' },
    { name: 'Airport Drop', value: 'Airport-Drop' },
    { name: 'Event', value: 'Event' },
  ];
  const handleAirportSearch = (text) => {
    Axios.get(
      `https://aviation-edge.com/v2/public/autocomplete?key=ab0439-86b2ba&city=${text}`,
    ).then((res) => {
    
      setOptionss(res?.data?.cities);
    });
  };
  const aaaaa = [
    {
      label: 'lofsd',
      value: 'fdssdds',
    },
    {
      label: 'sdhfubsd',
      value: 'dfufgadsjl',
    },
    {
      label: 'djkfdf',
      value: 'jfjklsdnfkjsd',
    },
  ];


  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item
            name="rideMode"
            rules={[
              {
                required: true,
                message: 'Please select ride mode!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value={'oneWayRide'}>One Way Ride</Radio>
              <Radio value={'roundTrip'}>Round Trip</Radio>
              <Radio value={'instantRide'}>Instant Ride</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item
            name="rideType"
            className="flex justify-end"
            rules={[
              {
                required: true,
                message: 'Please select ride type!',
              },
            ]}
          >
            <Select placeholder="Select Ride type" onChange={(e) => setRideTypes(e)}>
              {rideType?.map((element) => (
                <Select.Option value={element?.value} key={element?.value}>
                  {element?.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        {rideTypes === 'Airport-Pickup' && (
          <div className="flex w-full">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                label={
                  <div>
                    <span className="formLabel mr-1">Select Airport</span>
                    <span>{requiredStar()}</span>
                  </div>
                }
                name="airport"
                rules={[
                  {
                    required: true,
                    message: 'Please fill!',
                  },
                ]}
              >
                <Select
                  value={GBMAssigneeId}
                  placeholder="Select internal assignee"
                  getPopupContainer={(node) => node.parentNode}
                  className="w-full"
                  showSearch
                  onSearch={(value) => {
                    getGBMAssignee(value);
                  }}
                  onSelect={(val, childProps) => {
                    setVisiblePopConfirmGBM(true);
                    setGBMPersonDetailsToShow(childProps);
                    setGBMAssigneeId(val);
                  }}
                  dropdownRender={() => {
                    return (
                      <div style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                        {internalAssigneeList?.result ? (
                          internalAssigneeList?.result?.map((item) => (
                            <div
                              className="flex px-2 py-1"
                              onClick={() => {
                                setVisiblePopConfirmGBM(true);
                                const newValues = {
                                  assigne: { ...item },
                                };
                                setGBMPersonDetailsToShow(newValues);
                                setGBMAssigneeId(item?.partyId);
                                onSelectGBMAssigne(item);
                              }}
                            >
                              <div className="border-b">
                                <div className="">
                                  <span className="text-green-900 font-medium">{item?.toName}</span>
                                  {', '}
                                  <span className="text-blue-800 font-medium">
                                    {item?.address?.city}
                                  </span>
                                  {', '}
                                  <span className="font-medium text-blue-800">
                                    {` (${item?.address?.region?.charAt(0)?.toUpperCase()})`}
                                  </span>
                                </div>
                                <span className="font-medium text-blue-800">
                                  {`${item?.phone?.countryCode}${item?.phone?.areaCode} ${item?.phone?.phone}`}
                                </span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="item-center text-center py-10">No data found</div>
                        )}
                      </div>
                    );
                  }}
                >
                  {/* {internalAssigneeList?.result?.map((item) => (
                                <Option
                                  className="capitalize"
                                  key={item?.id}
                                  // assigne={item}
                                  value={item?.partyId}
                                >
                                  <div className="flex ">
                                    <div className="">
                                      <div className="">
                                        <span className="text-green-900 font-medium">
                                          {item?.toName}
                                        </span>
                                        {', '}
                                        <span className="text-blue-800 font-medium">
                                          {item?.address?.city}
                                        </span>
                                        {', '}
                                        <span className="font-medium text-blue-800">
                                          {` (${item?.address?.region?.charAt(0)?.toUpperCase()})`}
                                        </span>
                                      </div>
                                      <span className="font-medium text-blue-800">
                                        {`${item?.phone?.countryCode}${item?.phone?.areaCode} ${item?.phone?.phone}`}
                                      </span>
                                    </div>
                                  </div>{' '}
                                </Option>
                              ))} */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item
                label={
                  <div>
                    <span className="formLabel mr-1">Flight Number</span>
                    <span>{requiredStar()}</span>
                  </div>
                }
                name="flightNumber"
                rules={[
                  {
                    required: true,
                    message: 'Please fill!',
                  },
                ]}
              >
                <Input size="large" placeholder="Flight Number" />
              </Form.Item>
            </Col>
          </div>
        )}
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item
            label={
              <div>
                <span className="formLabel mr-1">Pickup Location</span>
                <span>{requiredStar()}</span>
              </div>
            }
            name="pickupLocation"
          >
            <GooglePlacesAutocomplete
              type="text"
              apiKey={googleApi}
              ref={inputRef}
              // defaultValue={pickupLocation?.pickupLocation?.label || 'Select'}
              selectProps={{
                // value: pickupLocation,
                onChange: (object) => {
                  setpickupLocation({
                    pickupPlaceId: object?.value?.place_id,
                    pickupLocation: object?.label,
                  });

                  // defaultInputValue = pickupLocation?.pickupLocation
                },
                // value:pickupLocation?.pickupPlaceId

                placeholder: pickupLocation?.pickupLocation || 'Enter your pickup location',
                suggestionsClassNames: 'text-red-500',
              }}
              theme={{
                Theme: {
                  borderRadius: 0,
                  colors: {
                    primary25: 'hotpink',
                    primary: 'black',
                  },
                },
              }}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item
            label={
              <div>
                <span className="formLabel mr-1">Drop Location</span>
                <span>{requiredStar()}</span>
              </div>
            }
            name="dropLocation"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input drop location!',
            //   },
            // ]}
          >
            <GooglePlacesAutocomplete
              type="text"
              apiKey={googleApi}
              ref={inputRef}
              // selectOption={(value)=>console.log(value,'value')}
              selectProps={{
                onChange: (object) => {
                  setDropLocation({
                    dropPlaceId: object?.value?.place_id,
                    dropLocation: object?.label,
                  });
                },
                placeholder: dropLocation?.dropLocation || 'Enter your drop location',
                suggestionsClassNames: 'text-red-500',
              }}
              theme={{
                Theme: {
                  borderRadius: 0,
                  colors: {
                    primary25: 'hotpink',
                    primary: 'black',
                  },
                },
              }}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item
            label={
              <div>
                <span className="formLabel mr-1">Passengers</span>
                <span>{requiredStar()}</span>
              </div>
            }
            name="passengers"
            rules={[
              {
                required: true,
                message: 'Please input passenger count!',
              },
            ]}
          >
            <Input size="large" placeholder="Select Passengers" type="number" />
          </Form.Item>
        </Col>
        <Col xs={8} sm={8} md={4} lg={4} xl={4}>
          <Form.Item
            label={
              <div>
                <span className="formLabel mr-1">Infant Seats</span>
                <span>{requiredStar()}</span>
              </div>
            }
            name="infant"
            rules={[
              {
                required: true,
                message: 'Please fill!',
              },
            ]}
          >
            <Input size="large" placeholder="Infants" type="number" />
          </Form.Item>
        </Col>
        <Col xs={8} sm={8} md={4} lg={4} xl={4}>
          <Form.Item
            label={
              <div>
                <span className="formLabel mr-1">Toddler Seats</span>
                <span>{requiredStar()}</span>
              </div>
            }
            name="toddler"
            rules={[
              {
                required: true,
                message: 'Please fill!',
              },
            ]}
          >
            <Input size="large" placeholder="Toddlers" type="number" />
          </Form.Item>
        </Col>
        <Col xs={8} sm={8} md={4} lg={4} xl={4}>
          <Form.Item
            label={
              <div>
                <span className="formLabel mr-1">Booster Seats</span>
                <span>{requiredStar()}</span>
              </div>
            }
            name="booster"
            rules={[
              {
                required: true,
                message: 'Please fill!',
              },
            ]}
          >
            <Input size="large" placeholder="Infants" type="number" />
          </Form.Item>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <Form.Item
            label={
              <div>
                <span className="formLabel mr-1">Luggage Capacity (Large)</span>
                <span>{requiredStar()}</span>
              </div>
            }
            name="luggageCapacityLarge"
            rules={[
              {
                required: true,
                message: 'Please input luggage capacity!',
              },
            ]}
          >
            <Input
              placeholder="Large luggage"
              size="large"
              onChange={(e) => setLuggageQuantity(Number(e.target.value))}
              autocomplete="off"
              type="number"
            />
          </Form.Item>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <Form.Item
            label={
              <div>
                <span className="formLabel mr-1">Luggage Capacity (Small)</span>
                <span>{requiredStar()}</span>
              </div>
            }
            name="luggageCapacitySmall"
            rules={[
              {
                required: true,
                message: 'Please input luggage capacity!',
              },
            ]}
          >
            <Input
              placeholder="Small luggage"
              size="large"
              onChange={(e) => setLuggageQuantity(Number(e.target.value))}
              autocomplete="off"
              type="number"
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item label={<span className="formLabel">Luggage Quantity</span>} name="luggage">
            <Input
              value={
                Number(form.getFieldValue('luggageCapacitySmall')) +
                Number(form.getFieldValue('luggageCapacityLarge'))
              }
              placeholder={
                form.getFieldValue('luggageCapacitySmall') === undefined ||
                form.getFieldValue('luggageCapacityLarge') === undefined
                  ? 'Luggage Quantity'
                  : Number(form.getFieldValue('luggageCapacitySmall')) +
                    Number(form.getFieldValue('luggageCapacityLarge'))
              }
              size="large"
              disabled
            />
          </Form.Item>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <Form.Item
            label={
              <div>
                <span className="formLabel mr-1">Date</span>
                <span>{requiredStar()}</span>
              </div>
            }
            name="date"
            // required={true}
            rules={[
              {
                required: true,
                message: 'Please input Date!',
              },
            ]}
          >
            <DatePicker size="large" />
          </Form.Item>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <Form.Item
            label={
              <div>
                <span className="formLabel mr-1">Time</span>
                <span>{requiredStar()}</span>
              </div>
            }
            initialValue={moment()}
            name="rideTime"
            required={true}
          >
            <TimePicker size="large" use12Hours={false} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item
            label={
              <div>
                <span className="formLabel mr-1">Vehicle Type</span>
                <span>{requiredStar()}</span>
              </div>
            }
            name="vehicleType"
            rules={[
              {
                required: true,
                message: 'Please input vehicle type!',
              },
            ]}
          >
            <Select placeholder="Select vehicle type" size="large">
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
                <span className="formLabel mr-1">Payment Type</span>
                <span>{requiredStar()}</span>
              </div>
            }
            name="paymentType"
            rules={[
              {
                required: true,
                message: 'Please input Payment type!',
              },
            ]}
          >
            <Select placeholder="Select Payment type" size="large">
              {paymentType?.map((element) => (
                <Select.Option value={element?.value} key={element?.value}>
                  {element?.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="w-full">
            <Form.Item
              name="chauffeurID"
              label={
                <span className="formLabel p-0 mb-0">
                  {' '}
                  <p className="mb-0">
                    {' '}
                    <PlusOutlined />
                    Assign to chauffeur
                  </p>
                </span>
              }
            >
              <Select
                showSearch
                placeholder="Select a chauffeur"
                optionFilterProp="name"
                size="large"
                // onChange={onChange}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase()?.includes(input?.toLowerCase())
                }
              >
                {chauffeurList?.data?.map((group) => (
                  <Option
                    filter={group?.name}
                    key={group?._id}
                    value={group?._id}
                    title={group?.name}
                  >
                    {group?.name}
                  </Option>
                ))}
              </Select>
              {/* <AutoComplete
                allowClear
                onChange={(data, props) => {
                  setChauffeurId(props?.item?._id);
                }}
                dataSource={chauffeurList?.data?.map((group) => (
                  <Option
                    item={group}
                    filter={group.name}
                    key={group._id}
                    value={group.name}
                    title={group.name}
                  >
                    {group.name}
                  </Option>
                ))}
                placeholder="Select Chauffeur here"
              >
                <Input suffix={<Icon type="search" />} size="large" />
              </AutoComplete> */}
            </Form.Item>
          </div>
        </Col>
        {/* <Col xs={24} sm={24} md={12} lg={12} xl={12}></Col> */}
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.List name="addStop">
            {(fields, { add, remove }) => (
              <div>
                <div className="mb-2  ">
                  <span className="formLabel  mr-1">Add Stop</span>
                </div>
                {fields.map(({ key, name, ...restField }, index) => (
                  // <Space
                  //   key={key}
                  //   style={{
                  //     display: 'flex',
                  //     marginBottom: 2,
                  //   }}
                  //   align="baseline"
                  // >
                  <div key={key} className="flex justify-between items-center">
                    <Form.Item {...restField} name={[name, 'stop']}>
                      <GooglePlacesAutocomplete
                        type="text"
                        // value={addStop}
                        apiKey={googleApi}
                        ref={inputRef}
                        // selectOption={(value)=>console.log(value,'value')}
                        selectProps={{
                          onChange: (object) => {
                          
                            setAddStop([
                              ...addStop,
                              { stopName: object?.label, stopPlaceId: object?.value?.place_id },
                            ]);
                            //Format in payload
                            // "addStop":[
                            // {
                            //   stopPlaceId:'vfhvwehfvbwhe',
                            //   stopName:"Asr"
                            // },{
                            //   stopPlaceId:'vfhvwehfvbwhe',
                            //   stopName:"Asr"
                            // }
                            //  ]
                            // setAddStop([object?.label])
                            // console.log('addStop', addStop)
                            // setAddStop({...addStop,stop:object?.label});
                            // console.log('...addStop', addStop.concat({stop:object?.label}))
                          },
                          placeholder: addStop
                            ? // ? addStop?.map((val) => {
                              //     val?.stopName;
                              //   })
                              addStop?.[name]?.stopName
                            : 'Enter your stop',
                          suggestionsClassNames: 'text-red-500',
                        }}
                        theme={{
                          Theme: {
                            borderRadius: 0,
                            colors: {
                              primary25: 'hotpink',
                              primary: 'black',
                            },
                          },
                        }}
                      />
                    </Form.Item>

                    <MinusCircleOutlined
                      className="mb-6 ml-2"
                      onClick={() => {
                        remove(name);
                        let newArr = addStop && addStop.filter((val, idx) => idx !== index);

                        setAddStop(newArr);
                      }}
                    />
                  </div>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      // add();
                      if (fields.length === 0) {
                        add();
                      } else if (addStop?.length >= fields?.length) {
                        add();
                      } else {
                        message.warning('Please fill previous stop!');
                        return false;
                      }
                    }}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add a stop
                  </Button>
                </Form.Item>
              </div>
            )}
          </Form.List>
        </Col>
        <Col>
          <Form.Item
            label={
              <div>
                <span className="formLabel mr-1">Add Trailer</span>
                <span>{requiredStar()}</span>
              </div>
            }
            name="addTrailer"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input Payment type!',
            //   },
            // ]}
            valuePropName="checked"
          >
            <Checkbox size="large">Want to add a Trailer for 50$</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <div className="flex justify-end gap-4">
        <Button size="large" onClick={() => handleCancel()}>
          Cancel
        </Button>
        <Button
          type="primary"
          size="large"
          // htmlType="submit"
          loading={loadingForUpload}
          onClick={() => {
            form
              .validateFields([
                'rideType',
                'rideMode',
                'pickupLocation',
                'dropLocation',
                'passengers',
                'childSeat',
                'luggageCapacitySmall',
                'luggageCapacityLarge',
                'date',
                'rideTime',
                'vehicleType',
                'addStop',
              ])
              .then(() => {
                handleOk();
              });
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default connect(({ rides, chauffeur }) => ({
  ridesList: rides?.ridesList,
  chauffeurList: chauffeur?.chauffeurList,
}))(CreateRide);
