import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Tag } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
import { IRoute, ITagMenu } from '@/tsTypes/menuInterface.d'
import './index.scss'
import ContextMenu from './components/contextMenu'
import { setActive, removeTag, addTag } from '@/store/slice/tagView'
import { tagViewSelector } from '@/store/slice/tagView'
import { routerSelector } from '@/store/slice/getRoutes'
import { clearCurrentData } from '@/store/slice/dataCenter'

const menuItem = { left: 0, top: 0, item: {} } as ITagMenu

const TagView: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()
  const { data: { activeTag, tagList, deleteItem } } = useSelector(tagViewSelector)
  const { data: paths } = useSelector(routerSelector)
  const [{ left, top, item }, setState] = useState(menuItem)

  const handleClickTag = (i: IRoute) => {
    history.replace(i.path)
    dispatch(setActive(i))
  }

  const handleCloseTag = (i: IRoute) => {
    dispatch(removeTag(i))
    dispatch(clearCurrentData(i.path))
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

  const setHashTag = (paths: IRoute[]) => {
    paths.forEach((item) => {
      const { path, children } = item
      const oi = tagList.filter((i) => i.path === path)
      // 找到的路由不在tagList列表里，且不是‘/’，就加进tagList
      path === pathname && !oi.length && path !== '/' && (dispatch(addTag(item)))
      // 否则就继续递归找
      children && children.length && setHashTag(children)
    })
  }

  useEffect(() => {
    const activeTagPath = activeTag?.path
    const deleteItemPath = deleteItem?.path
    /*
    * 这里其实得优化
    * 目前判断了关闭的tag是不是当前激活状态的tag
    * 不是的话其实就不需要做什么操作
    * 如果是就打开第length-1个tag
    * 目前关闭最后一个tag，会打开第length-1个tag
    * (存在问题是：关闭最后一个tag交互上没有问题，如果是关闭的中间的某个tag，他自动激活的还是第length-1个tag)
    * (其实逻辑应该是激活当前关闭的tag的前一个tag,而不是第length-1个
    */
    if (activeTagPath === deleteItemPath) {
      const lastRoute = tagList[tagList.length - 1]
      tagList.length && history.replace(lastRoute.path)
      dispatch(setActive(lastRoute))
    }
  }, [tagList])

  useEffect(() => {
    document.addEventListener('click', handleCloseMenu)
    // 组件卸载后就移除绑定事件
    return () => {
      document.removeEventListener('click', handleCloseMenu)
    }
  }, [])

  useEffect(() => {
    // 页面手动刷新的时候，查找到当前的hash地址，定位路由
    setHashTag(paths)
  }, [paths])

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