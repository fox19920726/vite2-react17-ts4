import React,  { FC, useContext } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import UserContext from '@/contexts/userContext'
import RouteContex from '@/contexts/routeContext';
import { useRouteList, useTagView } from '@/hooks'
import './index.scss'

import { Layout } from 'antd'
import Login from '@/views/Login'
import LayoutHeader from './header'
import LayoutSider from './sider'
import LayoutContent from './content'
import TagView from './tagView'

const LayoutMain: FC = () => {
  const { userInfo: { token } } = useContext(UserContext)
  const [paths, handleAsyncRoutes] = useRouteList()
  const [tags, handleTag] = useTagView()

  return (
    <HashRouter>
      <Switch>
        {/* /logon路由是不会带导航等公共组件的。/aaa/login这样才能匹配到带公用组件的路由 */}
        <Route exact path="/login" component={Login} />
        <Route
          path="/"
          render={() => {
            if (!token) {
              return <Redirect to="/login" />
            }
            return (
              <Layout>
                <LayoutHeader />
                <Layout>
                  <RouteContex.Provider value={{ paths, handleAsyncRoutes, ...{ tags, handleTag } }}>
                    <LayoutSider />
                    <Layout>
                      <TagView />
                      <LayoutContent />
                    </Layout>
                  </RouteContex.Provider>
                </Layout>
              </Layout>
            )
          }}
        />
      </Switch>
    </HashRouter>
  )
}

export default LayoutMain

