import React from 'react'
import { useField } from '../hooks'


const NewBlogFrom = ({ handlecreate }) => {


  // const [title, setTitle] = useState('')
  // const [author, setAuthor] = useState('')
  // const [url, setUrl] = useState('')
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()

    handlecreate({ title: title.value, author: author.value, url: url.value })

    title.reset()
    author.reset()
    url.reset()


  }

  return (
    <div>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div> title
          <input  {...title}
            // type="text"
            // value={title}
            // name="title"
            // onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div> author
          <input {...author}
            // type="text"
            // value={author}
            // name="author"
            // onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div> url
          <input {...url}
            // type="text"
            // value={url}
            // name="url"
            // onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <div>
          <button type="submit">create</button>
        </div>
      </form>
      <hr/>
    </div>
  )
}
export default NewBlogFrom