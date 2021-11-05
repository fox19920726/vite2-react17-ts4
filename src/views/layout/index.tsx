import React,  { FC } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from '@/views/Login'
import ContentMain from './content'
import './index.scss'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '@/store/slice/getInfo'


const LayoutMain: FC = () => {
  const { data: { token } } = useSelector(userInfoSelector)

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
            return ( <ContentMain />)
          }}
        />
      </Switch>
    </HashRouter>
  )
}

export default LayoutMain

