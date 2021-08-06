import React, { FC, useContext, useEffect } from 'react'
import RouteContext from '@/contexts/routeContext'
import { Tag } from 'antd'
import { useHistory } from 'react-router-dom'
import { IRoute } from '@/types/menuInterface'

const TagView: FC = () => {
  const history = useHistory()
  const { tags, handleRemoveTag } = useContext(RouteContext)

  const handleClick = (i: IRoute) => {
    history.push(i.path)
  }

  const handleClose = (i: IRoute) => {
    handleRemoveTag(i)
  }

  useEffect(() => {
    console.log('tags:', tags)
  }, [tags])

  return (
    <>
      {
        tags.map((i) => {
          return (
            <Tag
              key={i.path}
              closable
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