import React from 'react'
import styles from './index.module.css'
import logo from './images/logo.png'
import {useNavigate} from 'react-router-dom'
import { Form, Input, Button,message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import axios from 'axios'

export default function Login() {
  const history = useNavigate()
  const handleLogin = async(val)=>{
    const {username,password} = val
    const result = await axios.post('/login',{username,password})
    console.log(result)
    if(result.data.status === 0){
      sessionStorage.setItem('user_name',result.data.data.username)
      sessionStorage.setItem('user_id',result.data.data._id)
      message.success('登录成功')
      history('/home')
    }else{
      message.error(result.data.msg)
    }
  }
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginHeader}>
        <img src={logo} alt="" />
        <span>React项目: 后台管理系统</span>
      </div>
      <div className={styles.login}>
        <h1>用户登陆</h1>
        <Form onFinish={(val)=>{handleLogin(val)}}>
          <Form.Item
            name="username"
            rules={[
              { required: true, message: '用户名不能为空' },
              { min: 4, max: 12, message: '用户名必须在4-12位' },
              {
                pattern: /^[a-zA-Z0-9_]+$/,
                message: '用户名只能包括数字，字母，下划线'
              }
            ]}
            style={{marginBottom:'20px'}}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: '密码不能为空' },
              { min: 5, max: 15, message: '用户名必须在4-12位' },
              {
                pattern: /^[a-zA-Z0-9_]+$/,
                message: '用户名只能包括数字，字母，下划线'
              }
            ]}
            style={{marginBottom:'20px'}}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              style={{ width: '100%', backgroundColor: '#21b97a' ,color:'#fff'}}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
