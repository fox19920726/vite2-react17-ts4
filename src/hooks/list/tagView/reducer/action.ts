import {
  ADD_TAG,
  REMOVE_TAG,
  SET_ACTIVE,
  SET_DELETE
} from './types'

import { ITagViewState, ITagViewAction, IRoute } from '@/types/menuInterface'

export const addTag = (route: IRoute): ITagViewState => ({
  type: ADD_TAG,
  payload: {
    activeTag: route,
    tagList: [route]
  }
})

export const removeTag = (route: IRoute): ITagViewState => ({
  type: REMOVE_TAG,
  payload: {
    deleteItem: route,
    tagList: [route]
  }
})

export const setActive = (route: IRoute): ITagViewState => ({
  type: SET_ACTIVE,
  payload: {
    activeTag: route,
    tagList: [route]
  }
})

export const setDelete = (route: IRoute): ITagViewState => ({
  type: SET_DELETE,
  payload: {
    deleteItem: route,
    tagList: [route]
  }
})
