import React, { useState, useEffect } from 'react';
import LoginForm from './components/loginForm';
import UserBlogs from './components/userBlogs';
import blogService from './services/blogs';
import loginService from './services/login';
import NewBlogForm from './components/new-blog-form';
import Notification from './components/notification';
import Togglable from './components/togglable'

function App() {

  const [blogs, setBlogs] = useState([])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState(null)
  // const [newBlogFormVisible, setNewBlogFormVisible] = useState(false)



 useEffect(() => {

    blogService.getAll().then(initialBlogs => {
      setBlogs(initialBlogs)
    })

  }, [])


   useEffect(() => {
    const loggedUser = window.localStorage.getItem('user')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
      blogService.setToken(user.token)

    }

  }, [])


  const showMessage = (message) => {
    setMessage(message)
    setTimeout(() => {
      setMessage(null)
    }, 4000)
  }


  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const loggedUser = await loginService.login({
        username, password
      })

      localStorage.setItem('user', JSON.stringify(loggedUser))

      blogService.setToken(loggedUser.token)
      setUser(loggedUser)

      setUsername('')
      setPassword('')
      setError(null)
      showMessage(`user:  ${loggedUser.username} logged in`)
    } catch (error) {
      setError(true)
      showMessage(`invalid username or password`)
    }


  }
  const logout = () => {
    localStorage.clear()
    setUser(null)
    setError(null)
    showMessage(`logged out`)
  }

  const blogFormRef = React.createRef()

  const handlecreate = async (e) => {

    const newBlog = {
      title: e.target.title.value,
      author: e.target.author.value,
      url: e.target.url.value,
      likes: 0
    }


    try {
      const response = await blogService.create(newBlog)
      setBlogs(blogs.concat(response))

      // const allBlogs = await blogService.getAll()
      // setBlogs(allBlogs)
      setError(null)
      showMessage(`a new blog ${newBlog.title} by ${newBlog.author}`)


    } catch (error) {
      console.log(error.message)
      setError(true)
      showMessage(`Fields validation failed, make them valid`)
    }


  }

  const Login = () => {


    return (
      <div>
        <h2>Log in to application</h2>
        <LoginForm
          username={username}
          setUsername={setUsername}
          handleLogin={handleLogin}
          password={password}
          setPassword={setPassword}
        />
      </div>
    )

  }

  const UserUI = () => {



    return (
      <div>
        <h2>blogs</h2>
        <p> {user.name} logged in</p>
        <button onClick={logout}>logout</button>
        <Togglable buttonLabel='new blog' ref={blogFormRef}>
          <NewBlogForm
            handlecreate={handlecreate}
          />

        </Togglable>

        <UserBlogs
          blogs={blogs}
          user={user}
          setBlogs={setBlogs}

        />
      </div>
    )
  }

  return (
    <div>
      <Notification
        message={message}
        error={error}
      />
      {user === null
        ?
        Login()
        :
        UserUI()
      }
    </div>



  )
}

export default App;
