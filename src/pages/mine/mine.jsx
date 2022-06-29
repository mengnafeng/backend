import React from "react";
import axios from '../../utils/request';
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;
export default class Mine extends React.Component{
  render(){
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
          <Breadcrumb.Item>首页</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background content"
        >
            Mine
        </div>
      </Content>
    )
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
}
