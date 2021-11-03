import React, { FC } from 'react'
import { Layout } from 'antd'
import { Switch, Route, useHistory } from 'react-router-dom'
import { IRoute } from '@/tsTypes/menuInterface.d'
import components from '@/router/components'
import { useSelector } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './index.scss'

const { Content } = Layout

function setRoute(paths: IRoute[]): any {
  return (
    paths.map((item) => {
      const { children, path, component } = item
      if(children?.length){
        return setRoute(children)
      }
      return component && <Route exact path={path} key={path} component={components[component]} />
    })
  )
}

const LayoutContent: FC = () => {
  const { location: { pathname } } = useHistory()
  const paths = useSelector(({ routerReducer }) => routerReducer)

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
              {setRoute(paths)}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Content>
    </Layout>
  )
}
export default LayoutContent