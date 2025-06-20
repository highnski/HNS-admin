import Breadcrumbs from '@/components/BreadCrumbs';
import Page from '@/components/Page';
import {
  CarOutlined,
  DeleteOutlined,
  FolderViewOutlined,
  SearchOutlined,
  SolutionOutlined,
  EnvironmentOutlined,
  PrinterOutlined,
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
  Tooltip,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import moment from 'moment';
import { debounce } from 'lodash';
import SearchNotFound from '@/assets/icons/empty-search-contact.png';
import BookedVehicleModal from '@/components/BookedVehicleModal';
import UserModal from '@/components/UserModal';
import VehicleOptionView from '@/components/VehicleOptionView';
import VehicleLocationViewModal from '@/components/VehicleLocationViewModal';
import PrintAgreement from '@/components/PrintAgreement';

const UserDetails = ({ dispatch, userList, singleUser, loading }) => {
  const [openModal, setOpenModal] = useState({ name: '', open: false });
  const [getOptionData, setGetOptionData] = useState('');
  const [searchText, setSearchText] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [viewSize, setViewSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehicleImage, setVehicleImage] = useState('');
  const [docImage, setDocImage] = useState('');
  const [getPrintAgreement, setGetPrintAgreement] = useState('');

  const [form] = Form.useForm();

  const getAllUser = () => {
    dispatch({
      type: 'userDetails/getAllUserDetails',
      payload: {
        query: {
          startIndex,
          fetchSize: viewSize,
          keyword: searchText,
        },
      },
    }).then((res) => {});
  };

  useEffect(() => {
    getAllUser();
  }, [startIndex, viewSize, searchText, currentPage]);

  const getVehicle = (carId) => {
    dispatch({
      type: 'vehicles/getSingleVehicle',
      payload: {
        pathParams: { id: carId },
      },
    }).then((res) => {
      setVehicleImage(res?.data?.vehicleImage);
      form?.setFieldsValue({
        ...res?.data,
      });
    });
  };

  const getSingleUser = (id) => {
    dispatch({
      type: 'userDetails/getSingleUser',
      payload: {
        pathParams: { id: id },
      },
    }).then((res) => {
      setDocImage(res?.data);
      setGetOptionData(res?.data);
      setGetPrintAgreement(res?.data);
      form?.setFieldsValue({
        ...res?.data,
      });
    });
  };

  const onDeleteRide = (id) => {
    dispatch({
      type: 'userDetails/deleteRide',
      payload: {
        pathParams: {
          id,
        },
      },
    }).then((res) => {
      message.success('Ride Deleted Succesfully!');
      getAllUser();
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
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
      // render: (records) => <div>{records}</div>,
    },
    {
      title: 'Phone no.',
      key: 'phoneNo',
      dataIndex: 'phoneNo',
      width: 80,
    },

    {
      title: 'Car name',
      key: 'CarName',
      render: (record) => <div>{record?.CarDetails?.vehicleName}</div>,
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
      width: 100,
      // dataIndex: 'returnDate',
      render: (record) => <div>{moment(record?.returnDate).format('DD/MM/YYYY')}</div>,
    },
    {
      title: 'Print Agreement',
      align: 'center',
      width: 40,
      render: (record) => (
        <>
          <div className="flex justify-center items-center">
            <div
              className="mr-4"
              onClick={() => {
                setOpenModal({ name: 'Print Agreement', open: true });
                getSingleUser(record?._id);
              }}
            >
              <a type="primary">
                <span className="text-yellow-700">
                  <PrinterOutlined />
                </span>
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'View User',
      align: 'center',
      width: 60,
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
      title: 'View Vehicles',
      align: 'center',
      // width: 160,
      render: (record) => (
        <>
          <div className="flex justify-center items-center">
            <div
              className="mr-4"
              onClick={() => {
                getVehicle(record?.carId);
                // setVehicleisModal(true);
                setOpenModal({ name: 'View Vehicles', open: true });
              }}
            >
              <Tooltip title="Vehicles">
                <a type="primary">
                  <span className="text-green-800">
                    <CarOutlined />
                  </span>
                </a>
              </Tooltip>
            </div>
            <div className="flex justify-center items-center">
              <div
                className="mr-4"
                onClick={() => {
                  setOpenModal({ name: 'View Selected Optios', open: true });
                  getSingleUser(record?._id);
                }}
              >
                <Tooltip title="View Selected Optios">
                  <a type="primary">
                    <span className="text-yellow-700">
                      <FolderViewOutlined />
                    </span>
                  </a>
                </Tooltip>
              </div>
            </div>
            <div
              className=""
              onClick={() => {
                setOpenModal({ name: 'View location', open: true });
                getSingleUser(record?._id);
              }}
            >
              <Tooltip title="Location">
                <a type="primary">
                  <span className="text-blue-700 current-pointer">
                    {' '}
                    <EnvironmentOutlined />
                  </span>
                </a>
              </Tooltip>
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
                    onDeleteRide(record?._id);
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
        title="User details"
        PrevNextNeeded="N"
        breadcrumbs={
          <Breadcrumbs
            path={[
              {
                name: 'Dashboard',
                path: '/dashboard',
              },
              {
                name: 'UsersDetails',
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
                dataSource={userList?.data}
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
                      total={[userList?.count || 0]}
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
          title="Preview Vehicle"
          open={openModal?.name === 'View Vehicles'}
          closable={false}
          okText="Submit"
          okButtonProps={{ type: 'primary', size: 'large' }}
          cancelButtonProps={{ size: 'large' }}
          okType=""
          onCancel={() => {
            // setVehicleisModal(false);
            setOpenModal({ name: '', open: false });
          }}
          width={900}
          footer={null}
        >
          <BookedVehicleModal
            setOpenModal={setOpenModal}
            openModal={openModal}
            form={form}
            vehicleImage={vehicleImage}
          />
        </Modal>
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
          <UserModal
            setOpenModal={setOpenModal}
            openModal={openModal}
            form={form}
            docImage={docImage}
          />
        </Modal>
        <Modal
          title="Print Agreement"
          open={openModal?.name === 'Print Agreement'}
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
          <PrintAgreement
            setGetPrintAgreement={setGetPrintAgreement}
            getPrintAgreement={getPrintAgreement}
            setOpenModal={setOpenModal}
            openModal={openModal}
            form={form}
            docImage={docImage}
          />
        </Modal>
        <Modal
          title="Preview Selected Optios"
          open={openModal?.name === 'View Selected Optios'}
          closable={false}
          okText="Submit"
          okButtonProps={{ type: 'primary', size: 'large' }}
          cancelButtonProps={{ size: 'large' }}
          okType=""
          onCancel={() => {
            setOpenModal({ name: '', open: false });
          }}
          width={1200}
          footer={null}
        >
          <VehicleOptionView
            setOpenModal={setOpenModal}
            openModal={openModal}
            form={form}
            getOptionData={getOptionData}
            // docImage={docImage}
          />
        </Modal>
        <Modal
          // title="Preview Selected Optios"
          open={openModal?.name === 'View location'}
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
          <VehicleLocationViewModal form={form} />
        </Modal>
      </Page>
    </div>
  );
};

export default connect(({ userDetails, loading }) => ({
  loading: loading.effects['userDetails/getSingleUser'],
  loading: loading.effects['userDetails/getAllUser'],
  userList: userDetails?.userList,
  singleUser: userDetails?.singleUser,
}))(UserDetails);
