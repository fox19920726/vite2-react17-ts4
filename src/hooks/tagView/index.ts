import React, { useReducer } from 'react'
import { IRoute, ITagViewAction } from '@/tsTypes/menuInterface.d'
import { tagViewReducer } from './reducer/reducer'
import { addTag, removeTag, setActive, setDelete, setMenuItem, removeOtherTags, removeAllTags } from './reducer/action'

const tagView: ITagViewAction = {
  tagList: [] as IRoute[]
}

function useTagView() {
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

  const handleSetMenuItem = (route: IRoute): void => {
    dispatch(setMenuItem(route))
  }

  const handleRemoveOtherTags = (route: IRoute): void => {
    dispatch(removeOtherTags(route))
  }

  const handleRemoveAllTags = (): void => {
    dispatch(removeAllTags())
  }

  return [tags, {
    handleAddTag,
    handleRemoveTag,
    handleSetActive,
    handleSetDelete,
    handleSetMenuItem,
    handleRemoveOtherTags,
    handleRemoveAllTags
  }] as const
} 
export default useTagView