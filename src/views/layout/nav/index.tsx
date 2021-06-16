import React,  { FC, useEffect, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { IRoute } from '@/types/menuInterface'
import { getAsyncRoutes } from '@/api/api'
import components from '@/router/components'
import routes from '@/router/routers' 
import './index.scss'
import { Menu, message } from 'antd'

const { SubMenu, Item } = Menu

const handleClick = (e: React.Attributes): void => {
  console.log('click ', e);
}

/*
* 如果该菜单设置显示，并且他只有一个子路由
* 刚好该子路由又设置了不现实，那该菜单还显示吗
* 目前的逻辑是设置显示就显示，否则不显示
*/
function setSider(paths: IRoute[]) {
  return (
    paths.map((item) => {
      const { children, path, meta: { title }, show } = item

      if(children?.length && show){
        return (
          // title要点击的话就title={<Link to={path}>{title}</Link>}
          <SubMenu key={path} title={title}>
            {setSider(children)}
          </SubMenu>
        )
      }
      return (
        show && <Menu.Item key={path}>
          {<Link to={path} replace>{title}</Link>}
        </Menu.Item>
      )
    })
  )
}

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

const NavBar: FC = () => {
  const [paths, setPath] = useState(routes)

  const handleAsyncRoutes = async (): Promise<void> => {
    const { rows, code, msg } = await getAsyncRoutes()
  
    if (code === 200) {
      /* 
      * 此处不能[...paths, ...rows]
      * 因为setPath会改变paths的值
      * 导致开发的时候多次请求接口累积paths
      */
      setPath([...routes, ...rows])
      return
    }
    message.info(msg)
  }
  
  useEffect(() => {
    handleAsyncRoutes()
  }, [])
  
  return (
    <>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {setSider(paths)}
      </Menu>
      <Switch>
        {setRoute(paths)}
      </Switch>
    </>
  )
}

export default NavBar