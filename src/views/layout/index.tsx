import React,  { FC, useContext } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import UserContext from '@/contexts/userContext'
import { Layout } from 'antd'
import Login from '@/views/Login'
import Header from './header'
import Sider from './sider'
import Content from './content'

const LayoutMain: FC = () => {
  const { state: { token } } = useContext(UserContext)

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route
          path="/"
          render={() => {
            if (!token) {
              return <Redirect to="/login" />
            }
            return (
              <Layout>
                <Header />
                <Layout>
                  <Sider />
                  <Layout>
                    <Content />
                  </Layout>
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

