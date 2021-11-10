import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store'

interface TData {
  [key: string]: any
}

const dataCenterSlice = createSlice({
  name: 'routers',
  initialState: {
    /* 
    * 存数据的容器
    * 必须以键值对的形式存储
    * 例如：
    * data: {
    *   list: {},
    *   info: []
    * }
    */
    data: {} as TData
  },
  reducers: {
    setData: (state, { payload }) => {
      const { type, data } = payload
      state.data[type] = data
    },
    clearData: (state, { payload }) => {
      const { type } = payload
      state.data[type] = ''
    }
  }
})

export const { setData, clearData } = dataCenterSlice.actions
export const dataSelector = (state: RootState) => state.dataCenterSlice
export default dataCenterSlice.reducer