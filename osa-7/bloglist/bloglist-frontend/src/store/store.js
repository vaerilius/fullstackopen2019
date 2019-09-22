import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import loginReducer from '../reducers/loginReducer'
import notificationReducer from '../reducers/notificationReducer'
import blogsReducer from '../reducers/blogsReducer'


const reducer = combineReducers({
  user: loginReducer,
  notification: notificationReducer,
  blogs: blogsReducer

})


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store