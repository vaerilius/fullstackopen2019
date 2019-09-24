import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'


const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOGS':
      return [...action.blogs]
    case 'CREATE_BLOG':
      return [...state, action.blog]
    case 'VOTE_BLOG':
      return [...state].map(b => b.id !== action.data.id ? b : action.data)
        .sort((b1, b2) => b2.likes - b1.likes)
    case 'COMMENT_BLOG':
      return [...state].map(b => b.id !== action.data.id ? b : action.data)
    case 'REMOVE_BLOG':
      return [...state].filter(b => b.id !== action.id)
    default:
      return state
  }
}
export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      blogs
    })
  }
}
export const onCreateBlog = (blog) => {
  return async dispatch => {
    try {
      const newBlog = {
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: 0
      }
      const createdBlog = await blogService.create(newBlog)
      dispatch({
        type: 'CREATE_BLOG',
        blog: createdBlog
      })
      dispatch(setNotification({
        message: `a new blog ${blog.title} by ${blog.author} added`,
        type: ''
      }))
    } catch (error) {
      dispatch(setNotification({ message: error.message, type: 'error' }))
    }
  }
}
export const onLikeBlog = (blog) => {
  return async dispatch => {
    try {
      const likedBlog = { ...blog, likes: blog.likes + 1 }
      const data = await blogService.update(likedBlog)

      dispatch({
        type: 'VOTE_BLOG',
        data
      })
      dispatch(setNotification({
        message: `blog ${blog.title} by ${blog.author} liked!`,
        type: ''
      }))
    } catch (error) {
      dispatch(setNotification({ message: error.message, type: 'error' }))
    }
  }
}
export const onRemoveBlog = (blog) => {
  return async dispatch => {
    try {
      const removedBlog = blog
      await blogService.remove(blog)
      dispatch({
        type: 'REMOVE_BLOG',
        id: removedBlog.id
      })
      dispatch(setNotification({
        message: `blog ${blog.title} by ${blog.author} removed!`,
        type: ''
      }))
    } catch (error) {
      dispatch(setNotification({
        message: `${blog.title} has removed allready!`,
        type: 'error'
      }))
    }
  }
}
export const onAddComment = (comment, id) => {
  return async dispatch => {
    const data = await blogService.comment(comment, id)
    dispatch(
      {
        type: 'COMMENT_BLOG',
        data
      }
    )
  }
}



export default reducer