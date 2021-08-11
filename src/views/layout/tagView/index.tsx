import React, { FC, useContext, useEffect, useState } from 'react'
import RouteContext from '@/contexts/routeContext'
import { Tag } from 'antd'
import { useHistory } from 'react-router-dom'
import { IRoute, ITagMenu } from '@/types/menuInterface'
import './index.scss'
import ContextMenu from './components/contextMenu'

const menuItem = { left: 0, top: 0, item: {} } as ITagMenu

const TagView: FC = () => {
  const history = useHistory()
  const {
    tags: { activeTag, deleteItem, tagList },
    handleTag: { handleRemoveTag, handleSetActive }
  } = useContext(RouteContext)
  const [{ left, top, item }, setState] = useState(menuItem)

  const handleClickTag = (i: IRoute) => {
    history.replace(i.path)
    handleSetActive(i)
  }

  const handleCloseTag = (i: IRoute) => {
    handleRemoveTag(i)
  }

  const handleOpenMenu = (i: IRoute, e: React.MouseEvent) => {
    /* 
    * 阻止弹出默认右键菜单
    * 打开自定义的右键菜单
    * (如果要设置正要操作的menuItem，就应该在这里调用handleSetMenuItem)
    * 读取鼠标的位置传到contextMenu组件里
    */
    e.preventDefault()
    const { clientX, clientY } = e
    setState({ left: clientX, top: clientY, item: i })
  }

  const handleCloseMenu = () => {
    setState(menuItem)
  }

  useEffect(() => {
    /* 
    * 删除tag的时候,要去比较是否删的是当前激活的tag
    * 如果是，就激活第length-1个tag
    * 不是的话其实就不需要做什么操作
    */
    const activeTagPath = activeTag?.path
    const deleteItemPath = deleteItem?.path
    
    if (activeTagPath === deleteItemPath) {
      const lastRoute = tagList[tagList.length - 1]
      tagList.length && history.replace(lastRoute.path)
      handleSetActive(lastRoute)
    }
  }, [tagList])

  useEffect(() => {
    document.addEventListener('click', handleCloseMenu)
    // 组件卸载后就移除绑定事件
    return () => {
      document.removeEventListener('click', handleCloseMenu)
    }
  }, [])

  return (
    <div className="tagview-container">
      {
        tagList.map((i, index) => {
          return (
            <Tag
              key={i.path}
              color={activeTag?.path === i.path ? 'processing' : 'default'}
              closable={index !== 0}
              onClick={() => { handleClickTag(i) }}
              onClose={() => { handleCloseTag(i) }}
              onContextMenu={(e) => { handleOpenMenu(i, e) }}
            >{i.meta.title}</Tag>
          )
        })
      }
      {left > 0 ? <ContextMenu {...{ left, top, item }} /> : null}
    </div>
  ) 
}
export default TagView