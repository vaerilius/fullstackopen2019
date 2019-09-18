import React, { useState } from 'react'

const NewBlogFrom = ({ handlecreate }) => {


    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        handlecreate(e)
        setTitle('')
        setAuthor('')
        setUrl('')


    }

    return (
        <div>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div>
                    title
                    <input
                        type="text"
                        value={title}
                        name="title"
                        onChange={({ target }) => setTitle(target.value)}
                    />
                </div>
                <div>
                    author
                    <input
                        type="text"
                        value={author}
                        name="author"
                        onChange={({ target }) => setAuthor(target.value)}
                    />
                </div>
                <div>
                    url
                    <input
                        type="text"
                        value={url}
                        name="url"
                        onChange={({ target }) => setUrl(target.value)}
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