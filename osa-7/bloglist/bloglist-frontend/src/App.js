import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import BlogList from './components/Blogs'
import LoginForm from './components/loginForm'
import Logout from './components/logout'
import Notification from './components/Notification'
import Menu from './components/navbar/navbar'

import { initializeUser} from './reducers/loginReducer'
import { initializeBlogs} from './reducers/blogsReducer'
import {
  BrowserRouter as Router,
  Route,

  
} from 'react-router-dom'
import Users from './components/users/users';


const App = (props) => {


  useEffect(() => {
    props.initializeUser()
    props.initializeBlogs()
  }, [])

  if (props.user === null) {
    return (
      <div>
        <h2>log in to application</h2>
        <Notification />
        <LoginForm />
      </div>
    )
  }


  return (
    <div>
      <Router>
        <div>
        <Menu />

      <h2>blogs</h2>
      <Notification />
      <Logout />
  
      <Route exact path="/" render={() => <BlogList />} />

      <Route exact path="/users" render={() => <Users />} />


        </div>
      </Router>
    </div>


  )
}
const mapStateToProps = state => {
console.log(state);
  return {
    user: state.user,
    blogs: state.blogs
  }
}

export default connect(mapStateToProps,
  {
    initializeUser,
    initializeBlogs
  })(App)