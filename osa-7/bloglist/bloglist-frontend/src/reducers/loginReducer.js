import loginService from '../services/login'
import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'

const reducer = (
  state = null,
  action) => {
  switch (action.type) {
  case 'INIT_USER':
    return action.user
  case 'LOGIN_USER':
    return action.newUser
  case 'LOGOUT':
    return null
  default:
    return state
  }
}

export const logout = () => {
  return async dispatch => {
    blogService.destroyToken()
    window.localStorage.removeItem('loggedBlogAppUser')
    dispatch({
      type: 'LOGOUT'
    })
    dispatch(setNotification({ message: 'user loggedout', type: '' }))

  }
}

export const loginUser = user => {
  return async dispatch => {
    try {
      const newUser = await loginService.login({
        username: user.username,
        password: user.password
      })
      if (newUser) {
        window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(newUser))
        blogService.setToken(newUser.token)
        dispatch({
          type: 'LOGIN_USER',
          newUser
        })
        dispatch(setNotification({ message: `user: ${newUser.username} logged in`, type: '' }))

      }

    } catch (error) {
      dispatch(
        setNotification({ message: 'wrong username or password', type: 'error' })
      )
    }
  }
}

export const initializeUser = () => {
  return async dispatch => {
    try {
      const loggedUser = JSON.parse(window.localStorage.getItem('loggedBlogAppUser'))
      if (loggedUser !== null) {
        blogService.setToken(loggedUser.token)
        dispatch({
          type: 'INIT_USER',
          user: loggedUser
        })
      } else {
        dispatch({
          type: 'INIT_USER',
          user: null
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
}

export default reducer



