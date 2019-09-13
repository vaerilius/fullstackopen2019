import React, { useState } from 'react'
import blogsService from '../services/blogs'

const Blog = ({ blog, blogs, setBlogs }) => {

  const [activeBlog, setActiveBlog] = useState(false)

  const hideWhenUnActivate = { display: activeBlog ? 'none' : '' }
  const showWhenActivate = { display: activeBlog ? '' : 'none' }


  const liStyle = {
    border: '1px solid black',
    margin: 5,
    padding: 5
  }
  const active = {
    border: '1px solid green',
    margin: 5,
    padding: 5
  }

  const toggleLi = () => {
    setActiveBlog(!activeBlog)
  }

  const updateBlog = async () => {

    try {
      const update = {
        user: blog.user,
        likes: blog.likes + 1,
        author: blog.author,
        title: blog.title,
        url: blog.url
      }

      const response = await blogsService.update(update, blog.id)
      const finded = blogs.find(b => b.id === response.id)
      finded.likes += 1
      setBlogs(blogs.filter(b => b.id !== response.id ? b : response))

    } catch (error) {
      console.log(error)
    }
  }

  const removeBlog = async () => {
    if (!window.confirm(`remove blog ${blog.title} by ${blog.author}`)) {
      return
    }
    try {

      await blogsService.removeBlog(blog.id)
      setBlogs(blogs.filter(b => b.id !== blog.id))
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <li style={ liStyle } onClick={ toggleLi }>
      <div style={hideWhenUnActivate}>{blog.title} {blog.author}</div>

      <div style={ showWhenActivate } className={ active }>
        <div>{ blog.title } {blog.author}</div>
        <a href={ blog.url}  target="blank">{blog.url} </a>
        <div>{ blog.likes } likes  <button onClick={ updateBlog }>like</button></div>
        <div>Added by { blog.user.name }</div>
        {blog.user
          ?
          <button onClick={ removeBlog }>remove</button>
          :
          null
        }
      </div>
    </li>
  )
}

export default Blog