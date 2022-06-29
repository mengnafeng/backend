import React from 'react'
import ContentMain from '../ContentMain/index'
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import 'antd/dist/antd.min.css';
import './index.scss'
const { Header, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('首页', '/admin/home', <PieChartOutlined />),
  getItem('商品', '/admin',  <TeamOutlined />, [getItem('商城App', '/admin/goods'), getItem('h5', '8')]),
  getItem('订单列表', '/admin/list', <DesktopOutlined />),
  getItem('我的', '/admin/mine', <DesktopOutlined />),
  getItem('用户', '', <UserOutlined />, [
    getItem('fengmengna', '/admin/detail'),
    getItem('zhangsan', '4'),
  ]),
];



const Main = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const click = (e) => {
    //注意this指向问题，采用箭头函数this就指向当前组件
    props.history.push(e.key)
  }

  return (
    <Layout
      style={{
        minHeight: '90vh',
      }}
      >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[props.location.pathname]} mode="inline" items={items} onClick={click}/>
      </Sider>
        <Layout className="site-layout">
          <Header
            className="header"
          >
            <div>goods</div>
            <div className="user">
              <Avatar size={32} icon={<UserOutlined />} />
              <div className="user-name">username</div>
            </div>
          </Header>
          <div>
            <ContentMain />
          </div>
        </Layout>
      </Layout>
  )
}

export default Main;