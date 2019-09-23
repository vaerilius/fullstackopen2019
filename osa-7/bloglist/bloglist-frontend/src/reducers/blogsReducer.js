import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'


const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOGS':
      return [...action.blogs]
    case 'CREATE_BLOG':
      return [...action.blogs]
    case 'VOTE_BLOG':
      const blog = action.updatedBlog
      return [...state].filter(b => b.id !== blog.id ? b : blog)
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
    await blogService.create(newBlog)
    const blogs = await blogService.getAll()

  

      dispatch({
        type: 'CREATE_BLOG',
        blogs
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
      const likedBlog = { ...blog, likes: blog.likes++ }
      const updatedBlog = await blogService.update(likedBlog)
      dispatch({
        type: 'VOTE_BLOG',
        updatedBlog
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

export default reducer