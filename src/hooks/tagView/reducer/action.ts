import {
  ADD_TAG,
  REMOVE_TAG,
  SET_ACTIVE,
  SET_DELETE,
  SET_MENU_ITEM,
  REMOVE_OTHER_TAGS,
  REMOVE_ALL_TAGS
} from './types'

import { ITagViewState, IRoute } from '@/tsTypes/menuInterface.d'

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

export const setMenuItem = (route: IRoute): ITagViewState => ({
  type: SET_MENU_ITEM,
  payload: {
    menuItem: route,
    tagList: []
  }
})

export const removeOtherTags = (route: IRoute): ITagViewState => ({
  type: REMOVE_OTHER_TAGS,
  payload: {
    menuItem: route,
    tagList: []
  }
})

export const removeAllTags = (): ITagViewState => ({
  type: REMOVE_ALL_TAGS,
  payload: {
    tagList: []
  }
})