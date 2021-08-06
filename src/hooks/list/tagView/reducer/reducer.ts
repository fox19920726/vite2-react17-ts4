import {
  ADD_TAG,
  REMOVE_TAG
} from './types'

import { IRoute, ITagViewState } from '@/types/menuInterface'

export function tagViewReducer(state: IRoute[], action: ITagViewState): IRoute[] {
  const { type, payload } = action
  switch(type) {
    case ADD_TAG:
      return [
        ...state,
        payload
      ]
    case REMOVE_TAG:
      return [
        ...state.filter((i) => i.path !== payload.path)
      ]
    default: 
      return state
  }
}