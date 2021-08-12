import React, { FC, useContext } from 'react'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'
import RouteContext from '@/contexts/routeContext'
import { IRoute } from '@/types/menuInterface'
import components from '@/router/components'
import './index.scss'

const { Content } = Layout

function setRoute(paths: IRoute[]): any {
  return (
    paths.map((item) => {
      const { children, path, component, show } = item
      if(children?.length){
        return setRoute(children)
      }
      return component && <Route exact path={path} key={path} component={components[component]} />
    })
  )
}

const LayoutContent: FC = () => {
  const { paths } = useContext(RouteContext)
  return (
    <Layout>
      <Content className="content">
        <Switch>
          {setRoute(paths)}
        </Switch>
      </Content>
    </Layout>
  )
}
export default LayoutContent