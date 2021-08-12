import React,  { FC, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RouteContext from '@/contexts/routeContext'
import { IRoute, ITagViewAction } from '@/types/menuInterface'
import './index.scss'
import { Menu, Layout } from 'antd'

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
          <Menu.SubMenu key={path} title={title}>
            {setSider(children)}
          </Menu.SubMenu>
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
  const {
    paths,
    tags: { activeTag, tagList },
    handleTag: { handleAddTag, handleSetActive }
  } = useContext(RouteContext)

  let curt = {} as IRoute
  
  const findTag = (paths: IRoute[], currentTagPath: string, tagList: IRoute[]): IRoute => {
    paths.forEach((i: IRoute) => {
      const { path, children } = i
      const pathArr = tagList.map((ci: IRoute) => ci.path)
  
      if (path === currentTagPath) {
        curt = { ...i }
        pathArr.indexOf(path) < 0 && handleAddTag(curt)
      }
      if (children && children?.length > 0) {
        findTag(children, currentTagPath, tagList)
      }
    })
    return curt
  }

  const handleClick = ({ keyPath: [currentTagPath] }: { keyPath: string[]}): void => {
    const currentTag = findTag(paths, currentTagPath, tagList)

    handleSetActive(currentTag)
  }

  useEffect(() => {
    /* 
    * 初始化操作：设置activeTag, 并推入tagView数组
    * 默认active的tag为dashboard组件
    * 这里这样初始化tagView其实不太好，很死板
    * 因为如果配的第一个菜单不是dashboard组件就尴尬了
    */
    const route = paths[0]
    handleSetActive(route)
    handleAddTag(route)
  }, [])

  return (
    <Layout.Sider className="site-layout-background">
      <Menu
        onClick={handleClick}
        defaultSelectedKeys={[activeTag?.path || '/']}
        selectedKeys={[activeTag?.path || '/']}
        mode="inline"
      >
        {setSider(paths)}
      </Menu>
    </Layout.Sider>
  )
}

export default LayoutSider