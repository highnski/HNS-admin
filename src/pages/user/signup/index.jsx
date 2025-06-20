/* eslint-disable prefer-promise-reject-errors */
import React, { useEffect } from 'react';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link, connect, history } from 'umi';
import { callApi } from '@/utils/apiUtils';
import UserAuthLayout from '../UserAuthLayout';
import logo from '@/assets/SiderIcons/HighNsky_Logo-1-removebg-preview-p-500.png';
const SignUp = ({ dispatch }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch({
      type: 'common/getStateCodes',
      payload: {
        pathParams: {
          countryId: 'CAN',
        },
      },
    });
  }, []);

  const onFinish = (body) => {
    // console.log('body', body);
    dispatch({
      type: 'user/userRegister',
      payload: body,
      cb: (res) => {
        if (res) {
          history.replace('/user/login');
        }
      },
    });
  };
  return (
    <UserAuthLayout>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} className="h-full w-full bg-gray-800 p-24  ">
        <div className="shadow-md bg-white  mx-auto w-auto md:w-1/2    rounded-md border border-md p-8 mt-16 ">
          <div className=" ">
            <div className="flex justify-center ">
              {' '}
              <img src={logo} alt="Store illustration" className="h-10 md:h-16 self-center" />
            </div>
            <div className="my-4">
              <div className="font-bold text-4xl text-center ">SignUp!</div>
              <div className=" text-base text-center text-sm">Enter your details to SignUp</div>
            </div>
            <div className="">
              <Form
                hideRequiredMark
                autoComplete="off"
                form={form}
                colon={false}
                layout="vertical"
                onFinish={onFinish}
              >
                <Form.Item
                  name="name"
                  label={<span className="formLabel ">Name</span>}
                  rules={[
                    {
                      required: true,
                      message: "Name can't be blank!",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  name="phoneNo"
                  label={<span className="formLabel ">Phone no</span>}
                  rules={[
                    {
                      required: true,
                      message: "Number can't be blank!",
                    },
                  ]}
                >
                  <Input size="large" type="number" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label={<span className="formLabel ">Email</span>}
                  rules={[
                    {
                      type: 'email',
                      message: 'Please enter a valid email address!',
                    },
                    {
                      required: true,
                      message: "Email can't be blank!",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Password can't be blank!",
                    },
                  ]}
                  name="password"
                  label={<span className="formLabel ">Password</span>}
                >
                  <Input.Password
                    size="large"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form.Item>
                <Button type="primary" block size="large" htmlType="submit">
                  Sign Up
                </Button>
                {/* <div className="text-center mt-4 ">
                  <Link to="/user/forgotpassword" className="">
                    Forgot Password ?
                  </Link>
                </div> */}
                <div className="text-center mt-4 ">
                  <div>Already have an account?</div>
                  <Link to="/user/login" className="">
                    Log In
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Col>
    </UserAuthLayout>
  );
};

export default connect(({ common }) => ({}))(SignUp);
