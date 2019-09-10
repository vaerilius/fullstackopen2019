import React, { useState, useEffect } from 'react';
import LoginForm from './components/loginForm';
import UserBlogs from './components/userBlogs';
import blogService from './services/blogs';
import loginService from './services/login';
import NewBlogForm from './components/new-blog-form';
import Notification from './components/notification';




function App() {

  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState(null)



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

  const handlecreate = async (e) => {

    const newBlog = {
      title: e.target.title.value,
      author: e.target.author.value,
      url: e.target.url.value
    }


    try {
      const response = await blogService.create(newBlog)
      const allBlogs = await blogService.getAll()
      setBlogs(allBlogs)
      setError(null)
      showMessage(`a new blog ${newBlog.title} by ${newBlog.author}`)
  

    } catch (error) {
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
        <NewBlogForm
          handlecreate={handlecreate}
        />
        <UserBlogs
          blogs={blogs}
          user={user}
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
