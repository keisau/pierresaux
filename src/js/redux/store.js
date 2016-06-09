import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'

import reducers from './reducers'

export default createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(({ getState }) => {
    return (next) => (action) => {

    }
  })
)
