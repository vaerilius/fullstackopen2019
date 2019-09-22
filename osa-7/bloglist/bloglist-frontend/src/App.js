import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import BlogList from './components/Blogs'
import NewBlog from './components/NewBlog'
import LoginForm from './components/loginForm'
import Logout from './components/logout'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

import { initializeUser} from './reducers/loginReducer'
import { initializeBlogs} from './reducers/blogsReducer'


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

  const newBlogRef = React.createRef()

  return (
    <div>
      <h2>blogs</h2>
      <Notification />
      <Logout />
      <Togglable buttonLabel='create new' ref={newBlogRef}>
        <NewBlog newBlogRef={ newBlogRef }/>
      </Togglable>
      <BlogList />
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