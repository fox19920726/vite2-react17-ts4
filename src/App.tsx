import React, { FC } from 'react'
import { Router } from 'react-router-dom'
import { createHashHistory } from 'history'
import 'antd/dist/antd.css'
import '@/styles/App.scss'
import UserContext from '@/contexts/userContext'
import RouteContext from './contexts/routeContext'
import LayoutMain from '@/views/Layout'
import { useUserInfo, useRouteList, useTagView } from './hooks'

const history = createHashHistory()

const App: FC = () => {
  const [userInfo, handleInfo] = useUserInfo()
  const [paths, handleAsyncRoutes] = useRouteList()
  const [tags, handleTag] = useTagView()

  return (
    <UserContext.Provider value={{ userInfo,  handleInfo }}>
      <RouteContext.Provider value={{ paths, handleAsyncRoutes, tags, handleTag }}>
        <Router history={history}>
          <div className="app">
            <LayoutMain />
          </div>
        </Router>
      </RouteContext.Provider>
    </UserContext.Provider>
  )
}

export default App