import {
  ADD_TAG,
  REMOVE_TAG,
  SET_ACTIVE,
  SET_DELETE,
  SET_MENU_ITEM,
  REMOVE_OTHER_TAGS,
  REMOVE_ALL_TAGS
} from './types'

import { ITagViewState, ITagViewAction } from '@/types/menuInterface'

export function tagViewReducer(state: ITagViewAction, action: ITagViewState): ITagViewAction {
  const { type, payload } = action
  const { activeTag, deleteItem, menuItem, tagList } = payload
  switch(type) {
    case ADD_TAG:
      return {
        ...state,
        ...payload,
        tagList: [
          ...state.tagList,
          ...tagList
        ]
      }
    case REMOVE_TAG:
      return {
        ...state,
        ...payload,
        tagList: [
          ...state.tagList.filter((i) => i.path !== deleteItem?.path)
        ]
      }
    case SET_ACTIVE:
      return {
        ...state,
        activeTag
      }
    case SET_DELETE:
      return {
        ...state,
        deleteItem
      }
    case SET_MENU_ITEM:
      return {
        ...state,
        menuItem
      }
    case REMOVE_OTHER_TAGS:
      return {
        ...state,
        ...payload,
        tagList: [
          ...state.tagList.filter((i) => i.path === menuItem?.path || i.path === '/')
        ]
      }
    case REMOVE_ALL_TAGS:
      return {
        ...state,
        ...payload,
        tagList: [
          ...state.tagList.filter((i) => i.path === '/')
        ]
      }
    default: 
      return state
  }
}