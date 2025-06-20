import React, { useState, useEffect, useRef } from 'react';
import Breadcrumbs from '@/components/BreadCrumbs';
import Page from '@/components/Page';
import { connect } from 'umi';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Divider, Input, Row, Spin, Table, Image, Pagination, Popconfirm, Button, Tooltip } from 'antd';
import { debounce } from 'lodash';
import UpdatedInvoice from './UpdatedInvoice';
import ReactToPrint from 'react-to-print';
import PrintInvoce from './PrintInvoice';

//import AddPayment from './AddPayment';

const Payment = ({ dispatch, paymentsList, AllPayments }) => {
  // const [isAddModalVisible, setAddModalVisible] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [viewSize, setViewSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const[invoiceModal,setInvoiceModal]=useState(false)

  const componentRef = useRef();
 
  const getAllPayments = () => {
    dispatch({
      type: 'payments/getAllPayments',
      payload: {
        query: {
          startIndex,
          viewSize,
          keyword: searchText,
        },
      },
    }).then((res) => {
   
    });
  };

  useEffect(() => {
    getAllPayments();
  }, [startIndex, viewSize, searchText, currentPage]);

  const columns = [
    {
      title: 'SNo',
      key: 'sno',
      dataIndex: 'sno',
      render: (_, __, index) => <div> {index + 1 + viewSize * (currentPage - 1)}</div>,
    },
    {
      title: 'First Name',
      key: 'FirstName',
      dataIndex: 'FirstName',
      render: (__, records) => (
        <div className="">
          <span className="">{records?.firstName}</span>
        </div>
      ),
    },
    {
      title: 'Last Name',
      key: 'LastName',
      dataIndex: 'LastName',
      render: (__, records) => (
        <div className="">
          <span className="">{records?.lastName}</span>
        </div>
      ),
    },
    {
      title: 'Email',
      key: 'Email',
      dataIndex: 'Email',
      render: (__, records) => (
        <div className="">
          <span className="">{records?.email}</span>
        </div>
      ),
    },
    {
      title: 'Phone No.',
      key: 'PhoneNumber',
      dataIndex: 'PhoneNumber',
      render: (__, records) => (
        <div className="">
          <span className="">{records?.phoneNo}</span>
        </div>
      ),
    },
    {
      title: 'Lic. No.',
      key: 'LicNo.',
      dataIndex: 'LicNo.',
      render: (__, records) => (
        <div className="">
          <span className="">{records?.licNo}</span>
        </div>
      ),
    },
    {
      title: 'Lic. Doc.',
      key: 'PhoneNumber',
      dataIndex: 'PhoneNumber',
      render: (__, records) => (
        // <div className="">
        //   <span className="">{records?.licDoc?.url}</span>
        // </div>
        <div className="">
      

          <Image src={records?.licDoc?.url} width={150} />
        </div>
      ),
    },
    {
      title: 'Address',
      key: 'address',
      dataIndex: 'address',
      render: (__, records) => (
        <div className="">
          <span className="">{records?.address}</span>
        </div>
      ),
    },

    {
      title: 'Total Amount',
      key: 'totalAmount',
      dataIndex: 'totalAmount',
      render: (__, records) => (
        <div className="">
          <span className="">{records?.firstName}</span>
        </div>
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
  const debounceSearch = debounce(action, 500);
  return (
    <div>
      <Page
        title="Payment Details"
        PrevNextNeeded="N"
        breadcrumbs={
          <Breadcrumbs
            path={[
              {
                name: 'Dashboard',
                path: '/dashboard',
              },
              {
                name: 'PaymentDetails',
                path: '#',
              },
            ]}
          />
        }
      >
        <div className="bg-white ">
          <div className="">
            <div className="flex justify-end pt-5 ">
              <Button
                type="primary"
                size="large"
                className="mr-5"
                onClick={() => setInvoiceModal(true)}
              >
                view Invoice
              </Button>

              <ReactToPrint
                trigger={() => (
                  <Tooltip title="Print Out Slip">
                    <Button type="primary" size="large" className="mr-16">
                      print Invoice
                    </Button>
                  </Tooltip>
                )}
                content={() => componentRef?.current}
              />
            </div>

            <UpdatedInvoice visible={invoiceModal} setVisible={setInvoiceModal} />

            <div style={{ display: 'none' }}>
              <PrintInvoce componentRef1={componentRef} />
            </div>

            <div className="px-5 pt-5 flex gap-5 ">
              <Input
                size="large"
                prefix={<SearchOutlined />}
                placeholder="Enter First Name to search..."
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
                className="no-shadow zcp-fixed-w-table"
                rowClassName="cursor-pointer"
                pagination={false}
                // loading={Boolean(loading)}
                dataSource={AllPayments?.data}
                scroll={{ x: 1000 }}
                columns={columns}
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
                      total={[]}
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
        {/* <AddPayment
          isAddModalVisible={isAddModalVisible}
          setAddModalVisible={setAddModalVisible}
          visible={isAddModalVisible}
        /> */}
      </Page>
    </div>
  );
};

export default connect(({ payments }) => ({
  AllPayments: payments?.paymentsList,
  getAllPayments: payments?.AllPayments,
}))(Payment);
