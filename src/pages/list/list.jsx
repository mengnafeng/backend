import React from "react";
import axios from '../../utils/request';
import 'antd/dist/antd.min.css';
import './list.css';

import { Table, Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}


export default class List extends React.Component{
  render() {
    return (
      <Content
        style={{
          margin: '0 16px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>订单列表</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background content"
        >
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 20,
            }}
          />
        </div>
      </Content>
    );
  }

  async componentDidMount() {
    axios.get('http://localhost:4000/api/user/2222')
    .then(function (response) {
      // 处理成功情况
      console.log(response);
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error);
    })
    .then(function () {
      // 总是会执行
    });
  }
};