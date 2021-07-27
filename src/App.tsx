import React, { FC } from 'react'
import { Router } from 'react-router-dom'
import { createHashHistory } from 'history'
import 'antd/dist/antd.css'
import '@/styles/App.scss'
import UserContext from '@/contexts/userContext'
import Layout from '@/views/Layout'
import { useRouteList, useUserInfo } from './hooks'

const history = createHashHistory()

const App: FC = () => {
  const [userInfo, handleInfo] = useUserInfo()
  const [paths, handleAsyncRoutes] = useRouteList()

  return (
    <UserContext.Provider value={{ userInfo, handleInfo, paths, handleAsyncRoutes }}>
      <Router history={history}>
        <div className="app">
          <Layout />
        </div>
      </Router>
    </UserContext.Provider>
  )
}

export default App