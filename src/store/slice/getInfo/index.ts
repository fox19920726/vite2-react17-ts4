import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store'
import { getToken } from '@/utils/cookie'
import _ from 'lodash'

const initialState = {
	data: {
    roleId: 0,
    roleName: '',
    token: getToken(),
    userId: 0,
    userName: ''
  }
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setInfo: (state, { payload }) => {
      /*
      * 试了好多种，反正就是不行，非得一个个赋值才行
      * 后来我索性外面包了一层，还真就可以了
      * 只是多了一个层级也挺恶心的
      */
      state.data = payload
    },
    clearInfo: (state) => {
			state = { ...initialState }
    }
  }
})

export const { setInfo, clearInfo } = userInfoSlice.actions
export const userInfoSelector = (state: RootState) => state.userInfoSlice
export default userInfoSlice.reducer