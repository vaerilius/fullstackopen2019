import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import Blog from './components/Blog'
import blogService from './services/blogs'
import NewBlog from './components/NewBlog'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { useField } from './hooks'

import { initializeUser, loginUser, logout } from './reducers/loginReducer'
import { setNotification } from './reducers/notificationReducer'


const App = (props) => {
  const [username] = useField('text')
  const [password] = useField('password')
  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    blogService.getAll().then(blogs => {
      setBlogs(blogs)
    })
  }, [])

  useEffect(() => {
    props.initializeUser()


  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    props.loginUser({
      username: username.value,
      password: password.value
    })



  }

  const handleLogout = () => {
    props.logout()
  }

  const createBlog = async (blog) => {
    const createdBlog = await blogService.create(blog)
    newBlogRef.current.toggleVisibility()
    setBlogs(blogs.concat(createdBlog))
    props.setNotification({
      message: `a new blog ${createdBlog.title} by ${createdBlog.author} added`,
      type: ''
    })
  }

  const likeBlog = async (blog) => {
    const likedBlog = { ...blog, likes: blog.likes + 1 }
    const updatedBlog = await blogService.update(likedBlog)
    setBlogs(blogs.map(b => b.id === blog.id ? updatedBlog : b))
    props.setNotification({
      message: `blog ${updatedBlog.title} by ${updatedBlog.author} liked!`,
      type: ''
    })
  }

  const removeBlog = async (blog) => {
    const ok = window.confirm(`remove blog ${blog.title} by ${blog.author}`)
    if (ok) {
      try {
        await blogService.remove(blog)
        setBlogs(blogs.filter(b => b.id !== blog.id))
        props.setNotification({
          message: `blog ${blog.title} by ${blog.author} removed!`,
          type: ''
        })
      } catch (error) {
        props.setNotification({
          message: `${blog.title} has removed allready!`,
          type: 'error'
        })
      }

    }
  }

  if (props.user === null) {
    return (
      <div>
        <h2>log in to application</h2>

        <Notification notification={props.notification} />

        <form onSubmit={handleLogin}>
          <div>
            käyttäjätunnus
            <input {...username} />
          </div>
          <div>
            salasana
            <input {...password} />
          </div>
          <button type="submit">kirjaudu</button>
        </form>
      </div>
    )
  }

  const newBlogRef = React.createRef()

  const byLikes = (b1, b2) => b2.likes - b1.likes

  return (
    <div>
      <h2>blogs</h2>

      <Notification notification={props.notification} />

      <p>{props.user.name} logged in</p>
      <button onClick={handleLogout}>logout</button>

      <Togglable buttonLabel='create new' ref={newBlogRef}>
        <NewBlog createBlog={createBlog} />
      </Togglable>

      {blogs.sort(byLikes).map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          like={likeBlog}
          remove={removeBlog}
          user={props.user}
          creator={blog.user.username === props.user.username}
        />
      )}
    </div>
  )
}
const mapStateToProps = state => {
  console.log(state.notification)

  return {
    user: state.user,
    notification: state.notification
  }
}

export default connect(mapStateToProps,
  {
    initializeUser,
    loginUser,
    logout,
    setNotification
  })(App)