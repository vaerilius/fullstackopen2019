import React from 'react'
import { connect } from 'react-redux';
import BlogListItem from './blog/Blog-list-item'
import Togglable from '../Togglable'
import NewBlog from './blog/NewBlog'

import { onLikeBlog, onRemoveBlog } from '../../reducers/blogsReducer'


const BlogList = (props) => {
  const newBlogRef = React.createRef()
  if (props.user === undefined) {
    return null
  }

  return (
    <div>
      <Togglable buttonLabel='create new' ref={newBlogRef}>
        <NewBlog newBlogRef={newBlogRef} />
      </Togglable>
      <hr />
      {
        props.blogs.map(blog =>
          <BlogListItem
            key={blog.id}
            blog={blog}
            creator={blog.user.username === props.user.username}
          />
        )}
    </div>
  )
}


const mapStateToProps = state => {
  
  return {
    user: state.user,
    blogs: state.blogs
  }
}

export default connect(
  mapStateToProps,
  {
    onLikeBlog,
    onRemoveBlog
  }
)(BlogList)
