import React, { useReducer } from 'react'
import { IRoute, ITagView, ITagViewAction } from '@/types/menuInterface'
import { tagViewReducer } from './reducer/reducer'
import { addTag, removeTag, setActive, setDelete } from './reducer/action'

const tagView: ITagViewAction = {
  activeTag: {} as IRoute,
  deleteItem: {} as IRoute,
  tagList: [] as IRoute[]
}

function useTagView(): any[] {
  const [tags, dispatch] = useReducer(tagViewReducer, tagView)

  const handleAddTag = (route: IRoute): void => {
    dispatch(addTag(route))
  }

  const handleRemoveTag = (route: IRoute): void => {
    dispatch(removeTag(route))
  }

  const handleSetActive = (route: IRoute): void => {
    dispatch(setActive(route))
  }

  const handleSetDelete = (route: IRoute): void => {
    dispatch(setDelete(route))
  }

  return [tags, { handleAddTag, handleRemoveTag, handleSetActive, handleSetDelete }]
} 
export default useTagView