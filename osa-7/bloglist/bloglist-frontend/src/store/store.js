import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import loginReducer from '../reducers/loginReducer'
import notificationReducer from '../reducers/notificationReducer'


const reducer = combineReducers({
  user: loginReducer,
  notification: notificationReducer

})


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store