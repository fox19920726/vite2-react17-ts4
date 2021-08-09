import React, { useReducer } from 'react'
import { IRoute, ITagView, ITagViewAction } from '@/types/menuInterface'
import { tagViewReducer } from './reducer/reducer'
import { addTag, removeTag } from './reducer/action'

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

  return [tags, { handleAddTag, handleRemoveTag }]
} 
export default useTagView