import React from "react";
import axios from '../../utils/request';


export default class Register extends React.Component{
  render(){
    return (
      <div>Home111</div>
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
