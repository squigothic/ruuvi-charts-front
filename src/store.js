import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import measurementsReducer from './reducers/measurementsReducer'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  measurements: measurementsReducer,
  user: userReducer,
  notification: notificationReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
