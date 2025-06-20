import Breadcrumbs from '@/components/BreadCrumbs';
import Page from '@/components/Page';
import {
  CarOutlined,
  DeleteOutlined,
  FolderViewOutlined,
  SearchOutlined,
  SolutionOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import { Modal } from 'antd';
import {
  Button,
  Divider,
  Input,
  Pagination,
  Popconfirm,
  Row,
  Spin,
  Table,
  Form,
  message,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import moment from 'moment';
import { debounce } from 'lodash';
import SearchNotFound from '@/assets/icons/empty-search-contact.png';
import BookedVehicleModal from '@/components/BookedVehicleModal';
import BookingFormModal from '@/components/BookingFormModal';
import VehicleOptionView from '@/components/VehicleOptionView';
import VehicleLocationViewModal from '@/components/VehicleLocationViewModal';

const UserDetails = ({ dispatch, bookingFormList, singleUser }) => {
  const [openModal, setOpenModal] = useState({ name: '', open: false });
  const [getOptionData, setGetOptionData] = useState('');
  const [searchText, setSearchText] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [viewSize, setViewSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [docImage, setDocImage] = useState('');

  const [form] = Form.useForm();

  const getAllLinkBooking = () => {
    dispatch({
      type: 'bookingForm/getAllBookingForm',
      payload: {
        query: {
          startIndex,
          viewSize: viewSize,
          keyword: searchText,
        },
      },
    }).then((res) => {});
  };

  useEffect(() => {
    getAllLinkBooking();
  }, [startIndex, viewSize, searchText, currentPage]);

  const getSingleUser = (id) => {
    dispatch({
      type: 'bookingForm/getSingleBooking',
      payload: {
        pathParams: { id: id },
      },
    }).then((res) => {
      setDocImage(res?.data);
      setGetOptionData(res?.data);
      form?.setFieldsValue({
        ...res?.data,
      });
    });
  };

  const onDeleteBooking = (id) => {
    dispatch({
      type: 'bookingForm/deleteBooking',
      payload: {
        pathParams: {
          id,
        },
      },
    }).then((res) => {
      if (res) {
        message.success('Booking Deleted Succesfully!');
        getAllLinkBooking();
      }
    });
  };

  function handleChangePagination(current) {
    setStartIndex(viewSize * (current - 1));
    setCurrentPage(current);
  }
  const action = (val) => {
    setSearchText(val);
    setStartIndex(0);
  };
  const debounceSearch = debounce(action, 500);
  const columns = [
    {
      title: 'S No',
      key: 'srno',
      dataIndex: 'srno',
      render: (_, __, index) => <div> {index + 1 + viewSize * (currentPage - 1)}</div>,
    },
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'firstName',
      render: (record) => <div className="">{record}</div>,
      // width:120,
    },
    {
      title: 'Last Name',
      key: 'lastName',
      dataIndex: 'lastName',
      render: (record) => <div className="">{record}</div>,
      // width:120,
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
      // render: (records) => <div>{records}</div>,
    },
    {
      title: 'Phone no.',
      key: 'phoneNo',
      dataIndex: 'phoneNo',
    },
    {
      title: 'Lic no.',
      key: 'licNo',
      dataIndex: 'licNo',
    },

    {
      title: 'Pickup Date',
      key: 'pickupDate',
      // dataIndex: 'pickupDate',
      render: (record) => <div>{moment(record?.pickupDate).format('DD/MM/YYYY')}</div>,
    },
    {
      title: 'Dropped Off Date',
      key: 'DroppedOffDate',
      width: 120,
      // dataIndex: 'returnDate',
      render: (record) => <div>{moment(record?.returnDate).format('DD/MM/YYYY')}</div>,
    },
    {
      title: 'View User',
      align: 'center',
      // width: 60,
      render: (record) => (
        <>
          <div className="flex justify-center items-center">
            <div
              className="mr-4"
              onClick={() => {
                setOpenModal({ name: 'View User', open: true });
                getSingleUser(record?._id);
              }}
            >
              <a type="primary">
                <span className="text-yellow-700">
                  <SolutionOutlined />
                </span>
              </a>
            </div>
          </div>
        </>
      ),
    },

    {
      title: 'Action',
      align: 'center',
      // width:"100px",
      align: 'left',
      render: (record) => {
        return (
          <>
            <div className="flex justify-center">
              <div className="">
                <Popconfirm
                  title="Are you sure you want to delete this Ride?"
                  okText="Yes"
                  okType="primary"
                  cancelText="No"
                  onConfirm={() => {
                    onDeleteBooking(record?._id);
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
                ></Popconfirm>
              </div>
            </div>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <Page
        title="Form Link Booking"
        PrevNextNeeded="N"
        breadcrumbs={
          <Breadcrumbs
            path={[
              {
                name: 'Dashboard',
                path: '/dashboard',
              },
              {
                name: 'FormLinkBooking',
                path: '#',
              },
            ]}
          />
        }
      >
        <div className="bg-white ">
          <div>
            <div className="px-5 pt-5 flex gap-5 ">
              <Input
                size="large"
                prefix={<SearchOutlined />}
                placeholder="Enter first name here to search..."
                onChange={(e) => debounceSearch(e.target.value)}
              />
            </div>
            <Divider />
            <Spin size="large" spinning={''}>
              {' '}
              <Table
                className="no-shadow zcp-fixed-w-table px-6"
                // rowClassName="cursor-pointer"
                pagination={false}
                // loading={Boolean(loading)}
                dataSource={bookingFormList?.data}
                scroll={{ x: 1500 }}
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
                  // <CheckValidation show={vehiclesList?.count > 5}>
                  <Row className="mt-2" type="flex" justify="end">
                    <Pagination
                      key={`page-${''}`}
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
                      total={[bookingFormList?.totalCount || 0]}
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
        <Modal
          title="Preview User"
          open={openModal?.name === 'View User'}
          closable={false}
          okText="Submit"
          okButtonProps={{ type: 'primary', size: 'large' }}
          cancelButtonProps={{ size: 'large' }}
          okType=""
          onCancel={() => {
            setOpenModal({ name: '', open: false });
          }}
          width={900}
          footer={null}
        >
          <BookingFormModal
            setOpenModal={setOpenModal}
            openModal={openModal}
            form={form}
            docImage={docImage}
          />
        </Modal>
      </Page>
    </div>
  );
};

export default connect(({ bookingForm }) => ({
  bookingFormList: bookingForm?.bookingFormList,
  // singleUser: userDetails?.singleUser,
}))(UserDetails);

// export default connect(({ vehicles, loading }) => ({
//   vehiclesList: vehicles?.vehiclesList,
//   loading: loading.effects['vehicles/getAllVehicles'],
// }))(Vehicles);
