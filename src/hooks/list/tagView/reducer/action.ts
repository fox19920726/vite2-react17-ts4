import {
  ADD_TAG, REMOVE_TAG
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

