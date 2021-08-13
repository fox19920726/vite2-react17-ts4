import React,  { FC, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RouteContext from '@/contexts/routeContext'
import { IRoute } from '@/types/menuInterface'
import './index.scss'
import { Menu, Layout } from 'antd'
import { AlertOutlined } from '@ant-design/icons'
import Hamburger from './components/hamburger'
import useCollapsed from '@/hooks/collapse'

/*
* 如果该菜单设置显示，并且他只有一个子路由
* 刚好该子路由又设置了不现实，那该菜单还显示吗
* 目前的逻辑是设置显示就显示，否则不显示
* flag是用来判断是否+icon的
*/
function setSider(paths: IRoute[], flag?: boolean) {
  return (
    paths.map((item) => {
      const { children, path, meta: { title }, show } = item
      if(children?.length && show){
        return (
          // title要点击的话就title={<Link to={path}>{title}</Link>}
          <Menu.SubMenu key={path} title={title} icon={flag ? <AlertOutlined /> : null}>
            {setSider(children)}
          </Menu.SubMenu>
        )
      }
      return (
        show && <Menu.Item key={path} icon={flag ? <AlertOutlined /> : null}>
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

  const [collapse, handleCollapse] = useCollapsed()

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
    /*
    * 不判断taglist长度的话
    * 开发的时候每次修改文件
    * 他都默认往里push一个，忒烦。。。
    */
    !tagList.length && handleAddTag(route)
  }, [])

  return (
    <>
      <Layout.Sider
        className="site-layout-background"
        collapsed={collapse}
      >
        <Menu
          onClick={handleClick}
          defaultSelectedKeys={[activeTag?.path || '/']}
          selectedKeys={[activeTag?.path || '/']}
          mode="inline"
        >
          {setSider(paths, true)}
        </Menu>
        <Hamburger {...{ collapse, handleCollapse }}/>
      </Layout.Sider>
    </>
  )
}

export default LayoutSider