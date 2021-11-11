import { createSlice, current } from '@reduxjs/toolkit'
import { RootState } from '@/store'

interface TData {
  [key: string]: any
}

const dataCenterSlice = createSlice({
  name: 'routers',
  initialState: {
    /* 
    * 存数据的容器
    * 必须以键值对的形式存储, 且键为路由path作为唯一键
    * 例如：
    * data: {
    *   '/list': {},
    *   '/login': []
    * }
    */
    data: {} as TData
  },
  /*
  * 在reducer里，要打印state必须得用他自带的current方法去打印。。。
  * 而且只能current(state), 如果current(state.data)就不行。。会报错，离谱
  */
  reducers: {
    setData: (state, { payload }) => {
      const { type, data } = payload
      state.data[type] = data
    },
    clearCurrentData: (state, { payload }) => {
      state.data[payload] = ''
    },
    clearOtherData: (state, { payload }) => {
      Object.keys(state.data).forEach((i) => {
        i !== payload && (state.data[i] = '')
      })
    },
    clearAllData: (state) => {
      Object.keys(state.data).forEach((i) => {
        state.data[i] = ''
      })
    }
  }
})

export const { setData, clearCurrentData, clearOtherData, clearAllData } = dataCenterSlice.actions
export const dataSelector = (state: RootState) => state.dataCenterSlice
export default dataCenterSlice.reducer