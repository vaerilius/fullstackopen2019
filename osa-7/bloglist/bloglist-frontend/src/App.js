import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import Blogs from './components/blogs/Blogs'
import BlogDetails from './components/blogs/blog/blog-details'
import LoginForm from './components/loginForm'
import Notification from './components/Notification'
import Menu from './components/navbar/navbar'
import UserBlogs from './components/users/user/userBlogs'


import { initializeUser } from './reducers/loginReducer'
import { initializeBlogs } from './reducers/blogsReducer'
import { initiazeUsers } from './reducers/usersReducer'
import {
  BrowserRouter as Router,
  Route,


} from 'react-router-dom'
import Users from './components/users/users';


const App = (props) => {

  useEffect(() => {
    props.initializeUser()
    props.initializeBlogs()
    props.initiazeUsers()

  }, [])

  const byId = (id) => {
    const user = props.users.find(u => u.id === id)
    return user
  }
 
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
        <Menu />
        <h2>Awesome Blog App</h2>
        <Notification />
        <Route exact path="/" render={() => <Blogs />} />
        <Route exact path="/blogs/:id" render={({ match }) =>
          <BlogDetails blog={props.blogs.find(b => b.id === match.params.id)} />
        } />

        <Route exact path="/users" render={() => <Users />} />
        <Route path="/users/:id" render={({ match }) =>
          <UserBlogs 
          user={byId(match.params.id)}
           />} />

      </Router>
    </div>


  )
}
const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user,
    users: state.users,
    blogs: state.blogs
  }
}

export default connect(mapStateToProps,
  {
    initializeUser,
    initializeBlogs,
    initiazeUsers
  })(App)