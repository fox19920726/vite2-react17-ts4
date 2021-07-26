import React, { useReducer, FC } from 'react'
import { useHistory } from 'react-router-dom'
import { setToken } from '@/utils/cookie'
import { loginReducer } from './reducer/reducer'
import { userEnterName, userLogin, userSuccess } from './reducer/action'
import { login } from '@/api/api'
import { ILogin } from '@/types/userInterface'
import './login.scss'
// import a from './images/logo.png'

const initState: ILogin = {
  name: '',
  pwd: '',
  isLoading: false,
  error: '',
  isLoggedIn: false
}

const Login: FC = () => {

  const history = useHistory()

  const [state, dispatch] = useReducer(loginReducer, initState)

  const { name, pwd, isLoading, isLoggedIn } = state

  // 点击立即登录
  const handleLogin = async (): Promise<void> => {
    dispatch(userLogin())

    const { code, data: { token }  } = await login(name, pwd)

    if (code === 200) {
      console.log('token1111:', token)
      // 登陆成功后设置token,跳转到要跳转的页面
      dispatch(userSuccess())
      setToken(token)
      history.push('/dashbord')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    dispatch(userEnterName({
      [name]: value
    }))
  }

  return ( 
    <>
      <img src="/images/logo.png" alt="" />
      <p>{isLoading ? '登录中...' : ''}</p>
      <p>{isLoggedIn ? '您已登录' : '请登录'}</p>
      <input
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="请输入"
        autoComplete="off"
      />
      <input
        name="pwd"
        value={pwd}
        onChange={handleChange}
        placeholder="请输入"
        autoComplete="off"
      />
      <button onClick={handleLogin}>立即登录</button>
    </>
  )
}

export default Login
