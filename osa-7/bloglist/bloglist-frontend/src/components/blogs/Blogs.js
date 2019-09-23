import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './blog/Blog-list-item'
import Togglable from '../Togglable'
import NewBlog from './blog/NewBlog'
import { List } from 'semantic-ui-react'

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
      <List celled relaxedsize={'big'}>
        {
          props.blogs.map(blog =>
            <BlogListItem
              key={blog.id}
              blog={blog}
              creator={blog.user.username === props.user.username}
            />
          )}
      </List>

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
