import React,  { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import RouteContext from '@/contexts/routeContext'
import { IRoute } from '@/types/menuInterface'
import './index.scss'
import { Menu, Layout } from 'antd'

const { SubMenu } = Menu
const { Sider } = Layout

function findTag(paths: IRoute[], currentTagPath: string, tags: IRoute[]): IRoute {
  let curt: IRoute | Record<string, unknown> = {}
  paths.forEach((i: IRoute) => {
    const { path, children } = i
    const pathArr = tags.map((ci: IRoute) => ci.path)

    if (path === currentTagPath && pathArr.indexOf(path) < 0) {
      curt = { ...i }
    }
    if (children && children?.length > 0) {
      findTag(children, currentTagPath, tags)
    }
  })
  return curt as IRoute
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

const LayoutSider: FC = () => {
  const { paths, tags, handleAddTag } = useContext(RouteContext)

  const handleClick = (e: React.Attributes): void => {
    const [currentTagPath] = e.keyPath
    const currentTag = findTag(paths, currentTagPath, tags)

    currentTag && handleAddTag(currentTag)
  }

  return (
    <Sider className="site-layout-background">
      <Menu
        onClick={handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {setSider(paths)}
      </Menu>
    </Sider>
  )
}

export default LayoutSider