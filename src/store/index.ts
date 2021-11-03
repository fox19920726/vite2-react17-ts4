import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import modules from './reducer'

const store = createStore(
	combineReducers(modules),
	applyMiddleware(thunk, promiseMiddleware)
)

export default store