import React, { PureComponent } from 'react'
import axios from '../../utils/request';
import { Checkbox, Form } from 'antd'
import {  Link } from 'react-router-dom'
import LinkIcon from '../../components/LinkIcon/index'
import './login.scss'

export default class Login extends PureComponent{
  constructor(props) {
    super(props)
    props = {...props}
  }

  state = {
    isModalOpened: false
  }

  render(){
    const {isModalOpened} = this.state;
    return (
      <div className="login__container">
        <div className='login__mask' hidden={!isModalOpened} onClick={() => this.handleMaskClick()} >
          <div className='login__mask__container'>
            <div className='tips'>登录二维码</div>
            <img src={require('../../assets/img/login.png')} />
          </div>
        </div>
        <div className="login__wrap">
          <div className="login__wrap--left">LOGO</div>
          <div className="login__wrap--right">
            <div className="form__decoration">
              <div className="logo">S</div>
            </div>
            <div className="form__container">
              <div className="form__title">YOUYU 后台管理中心</div>
              <Form>
                <Form.Item name="username" rules={[{ required: true, message: '请输入密码!' }]} >
                  <div className='form__wrap'>
                    <i className='form__icon iconfont icon-yonghu' />
                    <input ref={input => this.username = input} className='form__input' placeholder='用户名' />
                  </div>
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                  <div className='form__wrap'>
                    <i className='form__icon iconfont icon-mima' />
                    <input ref={input => this.password = input}  className='form__input' type='password' placeholder='密码'/>
                  </div>
                </Form.Item>
                <Form.Item name="isRemember" rules={[{ required: true, message: '请输入密码!' }]}>
                  <Checkbox className='form__remember' checked={false}>记住密码</Checkbox>
                </Form.Item>
                <button onClick={() => this.handleFormSubmit()} className='form__button' type='submit'>立即登录</button>
              </Form>
              <div className="form__footer">
                <Link to="/register">立即注册</Link>
                <div className="form__link">
                  其他登录方式
                  <LinkIcon icon="wechat.png" onClick={() => this.setIsModalOpened(true)} />
                  <LinkIcon icon="qq.png"  onClick={() => this.setIsModalOpened(true)}/>
                  <LinkIcon icon="weibo.png" onClick={() => this.setIsModalOpened(true)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleFormSubmit = () =>{
    const username = this.username.value;
    const password  = this.password.value;
    axios.post('http://localhost:4000/api/login', { 
      username, password 
    })
    .then((response)=> {
      // 处理成功情况
      localStorage.setItem('token', response.data.token);
      this.props.history.push('/admin')
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error);
    })
    .then(function () {
      // 总是会执行
    });
  }

  setIsModalOpened =  () =>{
    this.setState({
      isModalOpened: true
    })
  }

  handleMaskClick =  () =>{
    this.setState({
      isModalOpened: false
    })
  }
}