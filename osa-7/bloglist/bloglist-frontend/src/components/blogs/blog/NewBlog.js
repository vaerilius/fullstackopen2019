import React from 'react'
import { connect } from 'react-redux'
import { onCreateBlog } from '../../../reducers/blogsReducer'
import { Form, Input, Button } from 'semantic-ui-react'

import { useField } from '../../../hooks'

const NewBlog = (props) => {
  const [title, titleReset] = useField('text')
  const [author, authorReset] = useField('text')
  const [url, urlReset] = useField('text')

  const handleSubmit = async (event) => {
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
      <h3>create new blog</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            id='title'
            control={Input}
            label='Title'
            placeholder='Title'
            {...title}
          />
          <Form.Field
            id='author'
            control={Input}
            label='Author'
            placeholder='Author'
            {...author}
          />
          <Form.Field
            id='url'
            control={Input}
            label='Url'
            placeholder='Url'
            {...url}
          />
        </Form.Group>
        <Form.Field
          id='create'
          control={Button}
          content='create'
          label='Label with htmlFor'
          type='submit'
        />
      </Form>

    </div>
  )
}


export default connect(
  null,
  {
    onCreateBlog
  }
)(NewBlog)