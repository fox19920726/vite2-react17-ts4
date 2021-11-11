import React, { FC } from 'react'
import { ITagMenu } from '@/tsTypes/menuInterface.d'
import './index.scss'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setActive, removeOtherTags, removeAllTags, tagViewSelector } from '@/store/slice/tagView'
import { clearCurrentData, clearOtherData, clearAllData } from '@/store/slice/dataCenter'

const ContextMenu: FC<ITagMenu> = (props) => {
  const { left, top, item } = props
  const dispatch = useDispatch()
  const history = useHistory()
  const { data: { tagList } } = useSelector(tagViewSelector)


  const handleRefresh = () => {
    const { path } = item
    history.replace({
      pathname: '/reload',
      state: { path }
    })
    dispatch(clearCurrentData(path))
    /* 
    * 如果要设计刷新功能，前提必须实现页面的缓存
    * 页面缓存设计得再考虑考虑，因为react-router本身不支持缓存
    * 方案目前能想到的是：
    * 1、记录当前路由的数据状态
    * 每次回来读取状态（就需要设计一个中间件，专门用来存储、读取、删除）
    * 刷新功能就是去除数据存储，并重新载入路由
    * 2、跳转的时候，路由不进行卸载操作，只进行显示隐藏，刷新功能就是重新载入路由
    * 这两种方案我还没想好用哪个
    * 
    * update @ 2021-11-08 @ 金角大王
    * 在组件缓存的实现的过程中，发现跟trnsition组件切换功能相冲突
    * 因为trnsition包的源码实现是基于插槽实现的，每次都新克隆了新组件，但并没有记录组件的任何数据状态
    * 而react-router本身并没有实现缓存路由的功能，所以如果既要满足trnsition切换又要实现缓存
    * 就挺麻烦的，我又很懒，所以我决定编写个中间件去记录数据状态...（嘻嘻嘻嘻嘻）
    * 刷新功能就简单了，使用了个reload组件过渡，reload的过程中
    * 要先清除该组件记录的数据状态，再重定向回来
    */
  }
  const handleCloseOtherTags = () => {
    /* 
    * 关闭其他tag的时候
    * 要把当前的menuItem设置为激活
    * 并跳转到对应路由
    */
   const { path } = item
    dispatch(removeOtherTags(item))
    dispatch(setActive(item))
    history.replace(path)
    dispatch(clearOtherData(path))
  }

  const handleCloseAllTags = () => {
    /* 
    * 移除所有tag的时候
    * 把dashboard组件激活
    * 并跳转到dashboard的路由页面
    */
    const item = tagList[0]
    dispatch(removeAllTags())
    dispatch(setActive(item))
    history.replace(item.path)
    dispatch(clearAllData())
  }

  return (
    <div className="contextmenu" style={{ left: `${left}px`, top: `${top}px` }}>
      <ul>
        <li onClick={handleRefresh}>刷新本页</li>
        <li onClick={handleCloseOtherTags}>关闭其他</li>
        <li onClick={handleCloseAllTags}>关闭所有</li>
      </ul>
    </div>
  )
}

export default ContextMenu