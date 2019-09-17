import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'

import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReduser from './reducers/notificationReduser'
import filterReduser from './reducers/filterReducer'


const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReduser,
  filter: filterReduser
})
const store = createStore(reducer)
console.log(store.getState())

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)