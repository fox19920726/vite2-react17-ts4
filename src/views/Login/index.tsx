import React, { FC, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { setToken } from '@/utils/cookie'
import { login } from '@/api/api'
import { ILogin } from '@/types/userInterface'
import './index.scss'
import { Button, Form, Input } from 'antd'
import UserContext from '@/contexts/userContext'
import RouteContext from '@/contexts/routeContext'

const Login: FC = () => {
  const history = useHistory()
  const { handleInfo } = useContext(UserContext)
  const { handleAsyncRoutes } = useContext(RouteContext)

  const onFinish = async ({ name, pwd }: ILogin) => {
    const { code, data: { token }  } = await login(name, pwd)
    if (code === 200) {
      /*
      * 登陆成功后把token设置到cookie里
      * 然后去请求用户信息
      * 再去请求异步路由
      * 跳转到要跳转的页面
      */
      setToken(token)
      
      await handleInfo()
      await handleAsyncRoutes()
      history.push('/')
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }

  return ( 
    <div className="login-container">
      <img src="/images/logo.png" alt="这张图纯粹是为了测试静态资源文件夹设置的是否正确" />
      <Form
        name="loginForm"
        labelCol={{ span: 6 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="name"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="pwd"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 12 }}>
          <Button type="primary" htmlType="submit">立即登录</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
