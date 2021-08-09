import React, { FC, useContext, useEffect, useState } from 'react'
import RouteContext from '@/contexts/routeContext'
import { Tag } from 'antd'
import { useHistory } from 'react-router-dom'
import { IRoute } from '@/types/menuInterface'

const TagView: FC = () => {
  const history = useHistory()
  const { tags, handleTag: { handleRemoveTag } } = useContext(RouteContext)

  const handleClick = (i: IRoute) => {
    history.replace(i.path)
  }

  const handleClose = (i: IRoute) => {
    handleRemoveTag(i)
  }

  useEffect(() => {
    tags.length && history.replace(tags[tags.length - 1].path)
  }, [tags])

  return (
    <>
      {
        tags.map((i, index) => {
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