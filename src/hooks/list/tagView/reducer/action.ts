import {
  ADD_TAG, REMOVE_TAG
} from './types'

import { IRoute, ITagViewState } from '@/types/menuInterface'

export const addTag = (route: IRoute): ITagViewState => ({
  type: ADD_TAG,
  payload: route
})

export const removeTag = (route: IRoute): ITagViewState => ({
  type: REMOVE_TAG,
  payload: route
})

