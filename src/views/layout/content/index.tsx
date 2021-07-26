import React, { FC } from 'react'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'
import useRouteList from '@/hooks/getRoutes'
import { IRoute } from '@/types/menuInterface'
import components from '@/router/components'
import './index.scss'

const { Content } = Layout

function setRoute(paths: IRoute[]): any {
  return (
    paths.map((item) => {
      const { children, path, component, show } = item
      if(children?.length && show){
        return setRoute(children)
      }
      return show && component && <Route exact path={path} key={path} component={components[component]} />
    })
  )
}

const LayoutContent: FC = () => {
  const paths = useRouteList()
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