import React, { FC, useEffect, useState } from 'react'
import { Layout } from 'antd'
import { Switch, Route, useLocation } from 'react-router-dom'
import { IRoute } from '@/tsTypes/menuInterface.d'
import components from '@/router/components'
import { useSelector } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './index.scss'
import { routerSelector } from '@/store/slice/getRoutes'

const { Content } = Layout

function setRoute(paths: IRoute[], comps): any {
  return (
    paths.map((item) => {
      const { children, path, component } = item
      if(children?.length){
        return setRoute(children, comps)
      }
      return component && <Route exact path={path} key={path} component={comps[component]} />
    })
  )
}

const LayoutContent: FC = () => {
  const { pathname } = useLocation()
  const { data: paths } = useSelector(routerSelector)
  const [comps, setComps] = useState({})

  useEffect(() => {
    (async () => {
      const data = await components
      setComps(data)
    })()
  }, [])

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
              {setRoute(paths, comps)}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Content>
    </Layout>
  )
}
export default LayoutContent