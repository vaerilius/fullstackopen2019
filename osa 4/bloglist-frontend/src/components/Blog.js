import React, {useState} from 'react'
const Blog = ({ blog }) => {

  const [activeBlog, setActiveBlog] = useState(false)

  const hideWhenUnActivate = { display: activeBlog ? 'none' : '' }
  const showWhenActivate = { display: activeBlog ? '' : 'none' }


  const liStyle = {
    border: "1px solid black",
    margin: 5,
    padding: 5
  }
  const active = {
    border: "1px solid green",
    margin: 5,
    padding: 5
  }
 

  const toggleLi = () => {
    setActiveBlog(!activeBlog)
    console.log(blog)
  }


  return(
  <li style={liStyle} onClick={toggleLi}>
    <div style={hideWhenUnActivate}>{blog.title} {blog.author}</div>

    <div  style={showWhenActivate} className={active}>
    <div>{blog.title} {blog.author}</div>
    <a href={blog.url} target="blank">{blog.url} </a>
    <div>{blog.likes} likes  <button>like</button></div>
    <div>Added by {blog.user.name}</div>
    </div>
  </li>
)}

export default Blog