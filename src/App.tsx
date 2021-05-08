import React, { FC, useReducer, useEffect } from 'react'
import 'antd/dist/antd.css'
import '@/styles/App.scss'
import { getToken } from '@/utils/cookie'
import UserContext from '@/contexts/userContext'
import NavBar from '@/views/Layout/nav'
import { getUserInfo } from '@/api/api'
import { IUserInfo, IUserState, IData } from '@/types/userInterface'

const user: IUserInfo = {
  roleId: 0,
  roleName: '',
  token: '',
  userId: 0,
  userName: ''
}

function userInfoReducer(state: IUserInfo, action: IUserState): IUserInfo {
  const { type, payload } = action

  switch(type) {
    case 'setInfo':
      return {
        ...state,
        ...payload
      }
    default: 
      return state
  }
}

const App: FC = () => {

  const [state, dispatch] = useReducer(userInfoReducer, user)

  const handleInfo = async (): Promise<void> => {
    const { data } = await getUserInfo(getToken())
    dispatch({
      type: 'setInfo',
      payload: data
    })
  }

  useEffect(() => {

    handleInfo()

  }, [])
  

  return (
    <UserContext.Provider value={{ state, handleInfo }}>
      <div className="app">
        <NavBar />
      </div>
    </UserContext.Provider>
  )
}

export default App
