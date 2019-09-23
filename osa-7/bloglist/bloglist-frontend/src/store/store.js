import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import loginReducer from '../reducers/loginReducer'
import notificationReducer from '../reducers/notificationReducer'
import blogsReducer from '../reducers/blogsReducer'
import usersReducer from '../reducers/usersReducer'


const reducer = combineReducers({
  user: loginReducer,
  notification: notificationReducer,
  blogs: blogsReducer,
  users: usersReducer,

})


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store