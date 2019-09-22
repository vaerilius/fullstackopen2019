import React from 'react'
import { connect } from 'react-redux'
import { onCreateBlog } from '../reducers/blogsReducer'


import { useField } from '../hooks'

const NewBlog = (props) => {
  const [title, titleReset] = useField('text')
  const [author, authorReset] = useField('text')
  const [url, urlReset] = useField('text')

  const handleSubmit = async(event) => {
    event.preventDefault()

    props.onCreateBlog({
      title: title.value,
      author: author.value,
      url: url.value
    })
   
    props.newBlogRef.current.toggleVisibility()
    titleReset()
    authorReset()
    urlReset()

  }

  return (
    <div>
      <h2>create new</h2>

      <form onSubmit={handleSubmit}>
        <div>
          title:
          <input {...title} />
        </div>
        <div>
          author:
          <input {...author} />
        </div>
        <div>
          url:
          <input {...url} />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}


export default connect(
  null,
  {
    onCreateBlog
  }
)(NewBlog)