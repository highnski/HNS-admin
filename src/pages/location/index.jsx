import React, { useState, useEffect } from 'react';
import Breadcrumbs from '@/components/BreadCrumbs';
import { connect } from 'umi';
import Page from '@/components/Page';
import { debounce } from 'lodash';
import SearchNotFound from '@/assets/icons/empty-search-contact.png';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import {
  Button,
  Divider,
  Form,
  Input,
  Pagination,
  Popconfirm,
  Row,
  Spin,
  Table,
  message,
} from 'antd';
import AddLocation from './addLocation';

const Location = ({ dispatch, locationList, loading }) => {
  const [isAddModalVisible, setAddModalVisible] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [viewSize, setViewSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [locationData] = useState();
  const [editLocation, setEditLocation] = useState();
  const [form] = Form.useForm();

  const getAllLocation = () => {
    dispatch({
      type: 'location/getAllLocation',
      payload: {
        query: {
          startIndex,
          fetchSize: viewSize,
          keyword: searchText,
        },
      },
    });
  };
  const getSingleLocation = (id) => {
    dispatch({
      type: 'location/getSingleLocationDetails',
      payload: {
        pathParams: { id: id },
      },
    }).then((res) => {
      setAddModalVisible('EDIT');

      form?.setFieldsValue({
        ...res?.data,
      });
      setEditLocation(id);
    });
  };

  useEffect(() => {
    getAllLocation();
  }, [startIndex, viewSize, searchText, currentPage]);

  const onDeleteLocation = (id) => {
    dispatch({
      type: 'location/deleteLocation',
      payload: {
        pathParams: {
          id,
        },
      },
    }).then((res) => {
      message.success('Location Deleted Succesfully!');
      getAllLocation();
    });
  };
  const columns = [
    {
      title: 'S No',
      key: 'srno',
      dataIndex: 'srno',
      render: (_, __, index) => <div> {index + 1 + viewSize * (currentPage - 1)}</div>,
    },
    {
      title: 'Address line 1',
      key: 'AddressLine1',
      dataIndex: 'addressLine1',
    },
    {
      title: 'Address line 2',
      key: 'AddressLine2',
      dataIndex: 'addressLine2',
    },
    {
      title: 'PostalCode',
      key: 'postalCode',
      dataIndex: 'postalCode',
    },
    {
      title: 'City',
      key: 'city',
      dataIndex: 'city',
    },
    {
      title: 'Country',
      key: 'country',
      dataIndex: 'country',
    },

    {
      title: '',
      key: '',
      dataIndex: '',
    },

    {
      title: 'Action',
      align: 'center',
      width: 160,
      render: (record) => (
        <>
          <div className="flex justify-center items-center">
            <div
              className="mr-4"
              onClick={() => {
                getSingleLocation(record?._id);
                {
                  // console.log(record?._id, 'trytr');
                }
              }}
            >
              <a type="primary">
                <span className="text-blue-700">
                  <EditOutlined />
                </span>
              </a>
            </div>
            <div className="">
              <Popconfirm
                title="Are you sure you want to delete this Location?"
                okText="Yes"
                okType="primary"
                cancelText="No"
                onConfirm={() => {
                  onDeleteLocation(record?._id);
                }}
              >
                <a type="primary">
                  <span className="text-red-700">
                    <DeleteOutlined />
                  </span>
                </a>
              </Popconfirm>
            </div>
          </div>
        </>
      ),
      // },
    },
  ];
  function handleChangePagination(current) {
    setStartIndex(viewSize * (current - 1));
    setCurrentPage(current);
  }

  const action = (val) => {
    setSearchText(val);
    setStartIndex(0);
  };
  const handleCancelPrice = () => {
    setEditPriceModal(false);
  };
  const debounceSearch = debounce(action, 500);
  return (
    <div>
      <div>
        <Page
          title="Locations"
          PrevNextNeeded="N"
          breadcrumbs={
            <Breadcrumbs
              path={[
                {
                  name: 'Dashboard',
                  path: '/dashboard',
                },
                {
                  name: 'Locations bb',
                  path: '#',
                },
              ]}
            />
          }
          primaryAction={
            <div>
              <Button
                type="primary"
                className="ml-2"
                size="large"
                onClick={() => {
                  setAddModalVisible('ADD');
                }}
              >
                Add Location
              </Button>
            </div>
          }
        >
          <div className="bg-white ">
            <div>
              <div className="px-5 pt-5 flex gap-5 ">
                <Input
                  size="large"
                  prefix={<SearchOutlined />}
                  placeholder="Enter City here to search..."
                  onChange={(e) => {
                    debounceSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
              <Divider />
              <Spin size="large" spinning={''}>
                {' '}
                <Table
                  className="no-shadow zcp-fixed-w-table px-6"
                  pagination={false}
                  loading={loading}
                  dataSource={locationList?.data}
                  scroll={{ x: 1000 }}
                  columns={columns}
                  locale={{
                    emptyText: (
                      <div className="text-center flex justify-center items-center py-10">
                        <div>
                          <p className="text-lg">No rides found!</p>
                          <img
                            className=""
                            src={SearchNotFound}
                            alt="No rides found!"
                            style={{ height: '100px' }}
                          />
                        </div>
                      </div>
                    ),
                  }}
                  footer={() => (
                    <Row className="mt-2" type="flex" justify="end">
                      <Pagination
                        key={`page-${currentPage}`}
                        showSizeChanger
                        pageSizeOptions={['10', '25', '50', '100']}
                        onShowSizeChange={(e, p) => {
                          setViewSize(p);
                          setCurrentPage(1);
                          setStartIndex(0);
                        }}
                        defaultCurrent={1}
                        current={currentPage}
                        pageSize={viewSize}
                        total={locationList?.totalCount || 0}
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                        onChange={handleChangePagination}
                      />
                    </Row>
                  )}
                />
              </Spin>
            </div>
          </div>
          <AddLocation
            setEditLocation={setEditLocation}
            editLocation={editLocation}
            isAddModalVisible={isAddModalVisible}
            setAddModalVisible={setAddModalVisible}
            visible={isAddModalVisible}
            setVisible={setAddModalVisible}
            getSingleLocation={getSingleLocation}
            locationData={locationData}
            getAllLocation={getAllLocation}
            form={form}
          />
        </Page>
      </div>
    </div>
  );
};

export default connect(({ location, loading }) => ({
  locationList: location?.locationList,
  loading: loading.effects['location/getAllLocation'],
  loading: loading.effects['location/getSingleLocationDetails'],
}))(Location);
