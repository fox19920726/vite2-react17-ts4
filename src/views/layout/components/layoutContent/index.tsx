import React, { FC } from 'react'
import { Layout } from 'antd'
import { Switch, Route, useLocation } from 'react-router-dom'
import { IRoute } from '@/tsTypes/menuInterface.d'
import components from '@/router/components'
import { useSelector } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './index.scss'
import routes from '@/router/routers'
// import { routerSelector } from '@/store/slice/getRoutes'

const { Content } = Layout

function setRoute(routes: IRoute[]): any {
  return (
    routes.map(({ children, path, component }) => {
      if(children?.length){
        return setRoute(children)
      }
      return component && <Route exact path={path} key={path} component={components[component]} />
    })
  )
}

const LayoutContent: FC = () => {
  const { pathname } = useLocation()
  // const { data: paths } = useSelector(routerSelector)

  return (
    <Layout>
      <Content className="content">
        <TransitionGroup>
          <CSSTransition
            key={pathname}
            timeout={200}
            classNames="fade"
            exit={false}
          >
            <Switch>
              {setRoute(routes)}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Content>
    </Layout>
  )
}
export default LayoutContent