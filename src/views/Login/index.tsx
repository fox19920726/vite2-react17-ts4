import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useUserInfo, useRouteList } from '@/hooks'
import { useSelector } from 'react-redux'
import { setToken } from '@/utils/cookie'
import { login } from '@/api/api'
import { ILogin } from '@/tsTypes/userInterface.d'
import './index.scss'
import { Button, Form, Input } from 'antd'
import { userInfoSelector } from '@/store/slice/getInfo'
import logo from '@/static/images/logo.png'

const Login: FC = () => {
  const history = useHistory()
  const { data: { token } } = useSelector(userInfoSelector)
  const { handleInfo } = useUserInfo()
  const handleAsyncRoutes = useRouteList()

  const onFinish = async ({ userName, password }: ILogin) => {
    const { code, data: { token }  } = await login(userName, password)
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

  useEffect(() => {
    /*
    * 目前拿得到token的话就直接跳转去首页
    * 也不知道这样的操作合不合理
    * 有没有别的奇技淫巧
    */
    token && history.push('/')
  }, [])

  return ( 
    <div className="login-container">
      <img src={logo} />
      {/* <img src='./images/logo.png' alt="这张图纯粹是为了测试静态资源文件夹设置的是否正确" /> */}
      <Form
        name="loginForm"
        labelCol={{ span: 6 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="userName"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
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
