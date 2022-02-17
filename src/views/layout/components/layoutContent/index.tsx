import React, { FC, useRef } from 'react'
import { Layout, Button } from 'antd'
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
  const wraper = useRef(null)
  const handleClick = (e) => {
    console.log('wraper:', wraper.current)
  }

  return (
    <div ref={wraper}>
      <Layout>
        <Button type="primary" style={{ width: '100px', margin: '0 auto' }} onClick={handleClick}>生成</Button>
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
    </div>
  )
}
export default LayoutContent