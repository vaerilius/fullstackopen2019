import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './blog/Blog-list-item'
import Togglable from '../Togglable'
import NewBlog from './blog/NewBlog'
import { List } from 'semantic-ui-react'

const BlogList = (props) => {
  const newBlogRef = React.createRef()

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
            />
          )}
      </List>
    </div>
  )
}

const mapStateToProps = state => ({ blogs: state.blogs})

export default connect(
  mapStateToProps,
)(BlogList)
