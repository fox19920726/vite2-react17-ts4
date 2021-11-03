import { SET_ROUTES } from './types'
import { IRoute } from '@/tsTypes/menuInterface'
import _ from 'lodash'

const initial = [] as IRoute[]

const routerReducer = (state = initial, action) => {
  const { type, payload } = action

  switch(type) {
    case SET_ROUTES:
      return _.uniqWith([...state, ...payload], _.isEqual)
    default: 
      return state
  }
}

export default routerReducer