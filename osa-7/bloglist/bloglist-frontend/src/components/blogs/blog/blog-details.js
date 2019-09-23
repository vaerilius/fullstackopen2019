import React from 'react'
import { connect } from 'react-redux';
import { onLikeBlog, onRemoveBlog } from '../../../reducers/blogsReducer'


const BlogDetails = (props) => {
  console.log(props.blog);
  if (
    props.blog === undefined ) {
    return null
  }

  const like = (blog) => props.onLikeBlog(blog)
  const remove = (blog) => props.onRemoveBlog(blog)


  const details = () => (
    <div >
      <a href={props.blog.url}>{props.blog.url}</a>
      <div>{props.blog.likes} likes
        <button onClick={() => like(props.blog)}>like</button>
      </div>
      <div>added by {props.blog.user.name}</div>
      {!props.creator && (<button onClick={() => remove(props.blog)}>remove </button>)}
    </div>
  )

  return (
    <div >
      <h1>{props.blog.title} {props.blog.author}</h1>
      {details()}
    </div>
  )
}


export default connect(
  null,
  {
    onLikeBlog,
    onRemoveBlog
  }
)(BlogDetails)