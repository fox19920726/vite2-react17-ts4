import React, { FC, useContext, useEffect, useState } from 'react'
import RouteContext from '@/contexts/routeContext'
import { Tag } from 'antd'
import { useHistory } from 'react-router-dom'
import { IRoute } from '@/types/menuInterface'
import './index.scss'

const TagView: FC = () => {
  const history = useHistory()
  const {
    tags: { activeTag, deleteItem, tagList },
    handleTag: { handleRemoveTag, handleSetActive }
  } = useContext(RouteContext)

  const handleClick = (i: IRoute) => {
    history.replace(i.path)
    handleSetActive(i)
  }

  const handleClose = (i: IRoute) => {
    handleRemoveTag(i)
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

  return (
    <div className="tagview-container">
      {
        tagList.map((i, index) => {
          return (
            <Tag
              key={i.path}
              color={activeTag?.path === i.path ? 'processing' : 'default'}
              closable={index !== 0}
              onClick={() => { handleClick(i) }}
              onClose={() => { handleClose(i) }}
            >{i.meta.title}</Tag>
          )
        })
      }
    </div>
  ) 
}
export default TagView