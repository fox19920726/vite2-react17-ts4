import React, { FC } from 'react'
import { Router } from 'react-router-dom'
import { createHashHistory } from 'history'
import 'antd/dist/antd.css'
import '@/styles/App.scss'
import UserContext from '@/contexts/userContext'
import LayoutMain from '@/views/Layout'
import { useUserInfo } from './hooks'

const history = createHashHistory()

const App: FC = () => {
  const [userInfo, handleInfo] = useUserInfo()

  return (
    <UserContext.Provider value={{ userInfo, handleInfo }}>
      <Router history={history}>
        <div className="app">
          <LayoutMain />
        </div>
      </Router>
    </UserContext.Provider>
  )
}

export default App