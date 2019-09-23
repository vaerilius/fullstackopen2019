import React from 'react'
import { Link } from 'react-router-dom'

const UserBlogs = ({ user }) => {
  if (user === undefined) {
    return null
  }

  return (
    <div>
      <p>Added blogs</p>
      <ul>
        {user.blogs.map(b =>
          <li key={b.id}><Link  to={`/blogs/${b.id}`} >{b.title}</Link></li>
        )}
      </ul>
    </div>
  )
}

export default UserBlogs