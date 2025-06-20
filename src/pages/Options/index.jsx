import React, { useState } from 'react';
import { Button, Table, Divider, Popconfirm, message, Form, Spin, Row, Pagination } from 'antd';

// import SearchNotFound from '@/assets/icons/empty-search-contact.png';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Breadcrumbs from '@/components/BreadCrumbs';
import Page from '@/components/Page';

import { useEffect } from 'react';
import { debounce } from 'lodash';
import { connect } from 'umi';
import AddOptions from './addOptions';
import style from './style.less';

const Options = ({ dispatch, loading, optionList, SingleOption }) => {
  const [isAddModalVisible, setAddModalVisible] = useState(null);
  // const [searchText, setSearchText] = useState('');
  const [isFormEdit, setIsFormEdit] = useState(null);
  const [tab, setTab] = useState('ALL');
  // const [searchText, setSearchText] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [viewSize, setViewSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [form] = Form.useForm();
  const [editVehicleOption, setEditVehicleOption] = useState();
  const getAllOption = () => {
    dispatch({
      type: 'option/getAllOption',
      payload: {
        query: {
          startIndex,
          fetchSize: viewSize,
          // keyword: searchText,
        },
      },
    });
  };

  const getSingleVehicleOption = (id) => {
    dispatch({
      type: 'option/getSingleOption',
      payload: {
        pathParams: { id: id },
      },
    }).then((res) => {
      setAddModalVisible('EDIT');
      form?.setFieldsValue({
        ...res?.data,
      });
      setEditVehicleOption(id);
    });
  };

  useEffect(() => {
    getAllOption();
    // getSingleVehicleOption()
  }, [viewSize, startIndex, currentPage]);

  const onDeleteVehicleOption = (id) => {
    dispatch({
      type: 'option/deleteVehicleOption',
      payload: {
        pathParams: {
          id,
        },
      },
    }).then((res) => {
      message.success('Vehicle Option Deleted Succesfully!');
      getAllOption();
    });
  };

  const columns = [
    {
      title: 'S No',
      key: 'sno',
      dataIndex: 'sno',
      render: (_, __, index) => <div> {index + 1 + viewSize * (currentPage - 1)}</div>,
    },
    {
      title: 'Vehicle Options',
      key: 'option',
      // dataIndex: 'option',
      render: (record) => (
        //  console.log('recordqqq', record),
        <div className={`${style.option}`}>{record?.option}</div>
      ),
    },

    {
      title: 'Price',
      key: 'Price',
      // dataIndex: 'price',
      render: (record) => (
        <div>
          {record?.priceType}/<span>$ {record?.price}</span>
        </div>
      ),
    },
    {
      title: 'Action',
      align: 'center',

      align: 'left',
      render: (record) => (
        <>
          <div className="flex ">
            <div
              className="pr-4"
              onClick={() => {
                getSingleVehicleOption(record?._id);
                {
                  // console.log(record?._id, 'tttt');
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
                title="Are you sure you want to delete this Vehicle Option?"
                okText="Yes"
                okType="primary"
                cancelText="No"
                onConfirm={() => {
                  onDeleteVehicleOption(record?._id);
                }}
              >
                <a type="primary">
                  <span className="text-red-700">
                    <DeleteOutlined />
                  </span>
                </a>
              </Popconfirm>
            </div>
            <div className="">
              <Popconfirm
                title="Are you sure you want to?"
                okText="Yes"
                okType="primary"
                cancelText="No"
                onConfirm={() => {}}
              >
                {tab !== 'ALL' && (
                  <div>
                    {/* {record?.isActive ? ( */}(
                    <svg
                      className="fill-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      height={18}
                      width={18}
                    >
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L381.9 274c48.5-23.2 82.1-72.7 82.1-130C464 64.5 399.5 0 320 0C250.4 0 192.4 49.3 178.9 114.9L38.8 5.1zM284.3 320h-59C136.2 320 64 392.2 64 481.3c0 17 13.8 30.7 30.7 30.7H528L284.3 320z" />
                    </svg>
                    ) : (
                    <svg
                      className="fill-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      width={18}
                      height={18}
                    >
                      <path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                    ){/* )} */}
                  </div>
                )}
              </Popconfirm>
            </div>
          </div>
        </>
      ),
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
  // const debounceSearch = debounce(action, 500);
  return (
    <>
      <Page
        title=" Vehicle Options"
        PrevNextNeeded="N"
        breadcrumbs={
          <Breadcrumbs
            path={[
              {
                name: 'Dashboard',
                path: '/dashboard',
              },
              {
                name: 'Vehicle Options',
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
              Add Options
            </Button>
          </div>
        }
      >
        <div className="bg-white ">
          <div>
            {/* <div className="px-5 pt-5 flex gap-5 ">
              <Input
                size="large"
                prefix={<SearchOutlined />}
                placeholder="Enter vehicle name here to search..."
                onChange={(e) => {
                  debounceSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div> */}
            <Divider />
            <Spin size="large" spinning={''}>
              {' '}
              <Table
                className="no-shadow zcp-fixed-w-table px-6  description"
                // rowClassName="cursor-pointer"
                pagination={false}
                loading={loading}
                // loading={Boolean(loading)}
                dataSource={optionList?.data}
                // scroll={{ x: 1000 }}
                columns={columns}
                locale={{
                  emptyText: (
                    <div className="text-center flex justify-center items-center py-10 	 ">
                      <div>
                        <p className="text-lg">No rides found!</p>
                        <img
                          className=""
                          //   src={SearchNotFound}
                          alt="No rides found!"
                          style={{ height: '100px' }}
                        />
                      </div>
                    </div>
                  ),
                }}
                footer={() => (
                  <Row className="mt-2" justify="end">
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
                      total={optionList?.totalCount || 0}
                      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                      onChange={handleChangePagination}
                    />
                  </Row>

                  // </CheckValidation>
                )}
              />
            </Spin>
          </div>
        </div>
        <AddOptions
          form={form}
          isAddModalVisible={isAddModalVisible}
          setAddModalVisible={setAddModalVisible}
          visible={isAddModalVisible}
          setVisible={setAddModalVisible}
          getAllOption={getAllOption}
          getSingleVehicleOption={getSingleVehicleOption}
          editVehicleOption={editVehicleOption}
          setEditVehicleOption={setEditVehicleOption}
        />
      </Page>
    </>
  );
};

export default connect(({ option, loading }) => ({
  optionList: option?.optionList,
  loading: loading.effects['option/getAllOption'],
  loading: loading.effects['option/getSingleOption'],
}))(Options);
