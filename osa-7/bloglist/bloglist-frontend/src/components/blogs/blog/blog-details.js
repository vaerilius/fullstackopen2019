import React from 'react'
import { connect } from 'react-redux';
import { onLikeBlog, onRemoveBlog, onAddComment } from '../../../reducers/blogsReducer'
import { useField } from '../../../hooks'


const BlogDetails = (props) => {

  if (
    props.blog === undefined ) {
    return null
  }
  const [comment, clearComment] = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(comment)
    props.onAddComment({comment: comment.value},props.blog.id )
    
    clearComment()


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
      <h4>Comments</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <input {...comment} />
          <button type='submit'>add comment</button>
        </div>

      </form>
      
      <ul>
        {props.blog.comments.map(comment =>
          <li key={comment}> {comment} </li>
          )}
      </ul>

    </div>
  )
}


export default connect(
  null,
  {
    onLikeBlog,
    onRemoveBlog,
    onAddComment
  }
)(BlogDetails)