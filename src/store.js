import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import measurementsReducer from './reducers/measurementsReducer'

const reducer = combineReducers({
  measurements: measurementsReducer,
  user: userReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
