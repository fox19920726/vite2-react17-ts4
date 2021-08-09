import {
  ADD_TAG,
  REMOVE_TAG
} from './types'

import { IRoute, ITagViewState, ITagViewAction } from '@/types/menuInterface'

export function tagViewReducer(state: ITagViewAction, action: ITagViewState): ITagViewAction {
  const { type, payload } = action
  const { activeTag, deleteItem, tagList } = payload
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
    default: 
      return state
  }
}