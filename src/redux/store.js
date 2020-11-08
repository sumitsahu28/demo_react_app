import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
let middleware = applyMiddleware(thunkMiddleware, logger)

export default function configureStore(initialState = { provinces: [] }) {
  return createStore(reducer,initialState, middleware)
}