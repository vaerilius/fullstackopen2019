const Blog = require('../models/blog')

const initialBlogs = [
 {
   title: 'HTML is easy',
   author: 'TT',
   url: 'ttt.com',
   likes: 0
 },
 {
    title: 'dota is easy',
    author: 'ee',
    url: 'ee.com',
    likes: 1
  }
]

const nonExistingId = async () => {
 const blog = new Blog({title: 'willremovethissoon'})
 await blog.save()
 await blog.remove()

 return blog._id.toString()
}

const blogsInDb = async () => {
 const blogs = await Blog.find({})
 return blogs.map(blog => blog.toJSON())
}


module.exports = { initialBlogs, nonExistingId, blogsInDb}

