import { SET_ROUTES } from './types'

import { IRoute } from '@/tsTypes/menuInterface.d'

export const setRoutes = (state: IRoute[]) => ({
  type: SET_ROUTES,
  payload: state
} as const)