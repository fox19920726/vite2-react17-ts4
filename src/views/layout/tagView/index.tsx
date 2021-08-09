import React, { FC, useContext, useEffect, useState } from 'react'
import RouteContext from '@/contexts/routeContext'
import { Tag } from 'antd'
import { useHistory } from 'react-router-dom'
import { IRoute } from '@/types/menuInterface'

const TagView: FC = () => {
  const history = useHistory()
  const { tags: { activeTag, deleteItem, tagList }, handleTag: { handleRemoveTag } } = useContext(RouteContext)

  const handleClick = (i: IRoute) => {
    history.replace(i.path)
  }

  const handleClose = (i: IRoute) => {
    handleRemoveTag(i)
  }

  useEffect(() => {
    tagList.length && history.replace(tagList[tagList.length - 1].path)
  }, [tagList])

  return (
    <>
      {
        tagList.map((i, index) => {
          return (
            <Tag
              key={i.path}
              closable={index !== 0}
              onClick={() => { handleClick(i) }}
              onClose={() => { handleClose(i) }}
            >{i.meta.title}</Tag>
          )
        })
      }
    </>
  ) 
}
export default TagView