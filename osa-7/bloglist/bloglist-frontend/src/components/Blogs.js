import React from 'react'
import { connect } from 'react-redux';
import Blog from './Blog'
import Togglable from '../components/Togglable'
import NewBlog from '../components/NewBlog'


import { onLikeBlog, onRemoveBlog } from '../reducers/blogsReducer'


const BlogList = (props) => {
  const newBlogRef = React.createRef()



  const likeBlog = blog => props.onLikeBlog(blog)

  const removeBlog = async (blog) => {
    const ok = window.confirm(`remove blog ${blog.title} by ${blog.author}`)
    if (ok) {
      props.onRemoveBlog(blog)

    }
  }


  return (
    <div>
      <br />
      <Togglable buttonLabel='create new' ref={newBlogRef}>
        <NewBlog newBlogRef={newBlogRef} />
      </Togglable>
      <hr />
      {props.blogs

        .map(blog =>
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
const blogsToShow = (state) => {
  if (state.blogs.length > 0 && state.user) {
    return [...state.blogs].filter(b => b.user.name === state.user.name)
      .sort((b1, b2) => b2.likes - b1.likes)
  }
  return state.blogs
}

const mapStateToProps = state => {

  return {
    user: state.user,
    blogs: blogsToShow(state)
  }
}

export default connect(
  mapStateToProps,
  {
    onLikeBlog,
    onRemoveBlog
  }
)(BlogList)
