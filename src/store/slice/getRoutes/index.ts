import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store'
import _ from 'lodash'
import { IRoute } from '@/tsTypes/menuInterface'

const initialState = [] as IRoute[]

const routerSlice = createSlice({
  name: 'routers',
  initialState: {
    data: initialState
  },
  reducers: {
    setRoutes: (state, action) => {
			state.data = _.uniqWith([...state.data, ...action.payload], _.isEqual)
    }
  }
})

export const { setRoutes } = routerSlice.actions
export const routerSelector = (state: RootState) => state.routerSlice
export default routerSlice.reducer