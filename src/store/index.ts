import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit'
import modules from './slice'

const store = configureStore({
  reducer: combineReducers(modules)
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export default store