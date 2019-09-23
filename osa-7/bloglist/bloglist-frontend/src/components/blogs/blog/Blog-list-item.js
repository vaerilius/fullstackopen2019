import React from 'react'
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'


const Blog = ({ blog }) => {



  return (
    <div >
      <List.Item >
      <List.Icon name='blogger' size='large'/>
        <Link to={`blogs/${blog.id}`}> {blog.title} {blog.author}
        </Link></List.Item>

    </div>
  )
}

export default Blog