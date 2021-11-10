import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store'
import { IRoute, ITagViewAction } from '@/tsTypes/menuInterface.d'

const tagViewSlice = createSlice({
  name: 'tagView',
  initialState: {
    data: {
      activeTag: {} as IRoute,
      deleteItem: {} as IRoute,
      menuItem: {} as IRoute,
      tagList: [] as IRoute[]
    }
  },
  reducers: {
    addTag: (state, { payload }) => {
			state.data = {
        ...state.data,
        activeTag: payload,
        tagList: [
          ...state.data.tagList,
          payload
        ]
      }
    },
    removeTag: (state, { payload }) => {
      state.data = {
        ...state.data,
        deleteItem: payload,
        tagList: [
          ...state.data.tagList.filter((i) => i.path !== payload.path)
        ]
      }
    },
    setActive: (state, { payload }) => {
			state.data = {
        ...state.data,
        activeTag: payload
      }
    },
    setDelete: (state, { payload }) => {
			state.data = {
        ...state.data,
        deleteItem: payload
      }
    },
    setMenuItem: (state, { payload }) => {
			state.data = {
        ...state.data,
        menuItem: payload
      }
    },
    removeOtherTags: (state, { payload }) => {
			state.data = {
        ...state.data,
        menuItem: payload,
        tagList: [
          ...state.data.tagList.filter((i) => i.path === payload.path || i.path === '/')
        ]
      }
    },
    removeAllTags: (state) => {
			state.data = {
        ...state.data,
        tagList: [
          ...state.data.tagList.filter((i) => i.path === '/')
        ]
      }
    }
  }
})

export const { addTag, removeTag, setActive, setDelete, setMenuItem, removeOtherTags, removeAllTags } = tagViewSlice.actions
export const tagViewSelector = (state: RootState) => state.tagViewSlice
export default tagViewSlice.reducer