/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout from '@ant-design/pro-layout';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useIntl, connect, history } from 'umi';
import { Result, Button } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { getMatchMenu } from '@umijs/route-utils';
import logo from '@/assets/SiderIcons/HighNsky_Logo-1-removebg-preview-p-500.png';
import moment from 'moment';
import EiborModal from '@/components/EiborModal';
import MainContent from '@/components/GlobalHeader/MainContent';
// import { io } from 'socket.io-client';
// import { socketDetail } from '@/utils/globalStates/socket';
import { useAtom } from 'jotai';

const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary=">
        <Link to="/dashboard">Go Login</Link>
      </Button>
    }
  />
);

/**
 * use Authorized check all menu item
 */
const menuDataRender = (menuList) =>
  menuList.map((item) => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
    return Authorized.check(item.authority, localItem, null);
  });

const BasicLayout = (props) => {


  const {
    dispatch,
    children,
    settings,
    currentUser,
    location = {
      pathname: '/',
    },
  } = props;
  const menuDataRef = useRef([]);
  const [eiborVisible, setEiborVisible] = useState(false);



  useEffect(() => {
    if (currentUser?.eiborUpdateRequired) setEiborVisible(true);
  }, [currentUser]);
  /**
   * init variables
   */
  moment.locale('en');
  const handleMenuCollapse = (payload) => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  }; // get children authority

  const authorized = useMemo(
    () =>
      getMatchMenu(location.pathname || '/', menuDataRef.current).pop() || {
        authority: undefined,
      },
    [location.pathname],
  );
  const { formatMessage } = useIntl();
  return (
    <ProLayout
      fixSiderbar
      siderWidth={250}
      theme={'dark'}
      logo={
        <img
          style={{
            height: '140px',
            width: '200px',
          }}
          src={logo}
        />
      }
      logoStyle={{
        width: '100%',
        height: '150px',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
      formatMessage={formatMessage}
      onCollapse={handleMenuCollapse}
      onMenuHeaderClick={() => history.push('/')}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || !menuItemProps.path) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      headerContentRender={() => <MainContent />}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: formatMessage({
            id: 'menu.home',
          }),
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      title={false}
      menuDataRender={menuDataRender}
      postMenuData={(menuData) => {
        menuDataRef.current = menuData || [];
        return menuData || [];
      }}
      {...props}
      {...settings}
    >
      <Authorized authority={authorized.authority} noMatch={noMatch}>
        {children}
      </Authorized>
      <EiborModal eiborVisible={eiborVisible} setEiborVisible={setEiborVisible} />
    </ProLayout>
  );
};

export default connect(({ global, settings, user }) => ({
  collapsed: global.collapsed,
  settings,
  currentUser: user?.currentUser,
}))(BasicLayout);
