
const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const Blog = require('../models/blog')
const api = supertest(app)


beforeEach(async () => {
   await Blog.remove({})
   // await Blog.insertMany(initialBlogs)
   console.log('cleared')

  const blogObjects = helper.initialBlogs
   .map(blog => new Blog(blog) )
   const promiseArray = blogObjects.map(blog => blog.save())
   await Promise.all(promiseArray)
})

test('blogs are returned as json ', async () => {
   await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
})


test('all blogs are returned ', async () => {
   const response = await api.get('/api/blogs')
   expect(response.body.length).toBe(helper.initialBlogs.length)
})
test('palautettujen blogien identifioivan kentän tulee olla nimeltään id', async () => {
   const blogsAtStart = await helper.blogsInDb()

   let isId = false;

   blogsAtStart.filter(blog => 'id' in blog ? isId = true : isId = false )

   expect(isId).toEqual(true)
})

test('a specific blog is within the returned blog', async () => {
   const response = await api.get('/api/blogs')

   const titles = response.body.map(r => r.title)

   expect(titles).toContain(
      'dota is easy'
   )
})

test('a valid blog can be added', async () => {
   const newBlog = {
      title: 'async/await simplifies making async calls',
      author: 'async',
      url: 'async.com',
      likes: 100
   }
   await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)

   const blogsAtEnd = await helper.blogsInDb()
   expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)

   const titles = blogsAtEnd.map(r => r.title)

   expect(titles).toContain('async/await simplifies making async calls')
   // 4.10: blogilistan testit, step3
})

// test('blog without content is not added', async () => {
//    const newBlog = {
//       author: 'async',
//    }

//    await api
//       .post('/api/blogs')
//       .send(newBlog)
//       .expect(500)

//    const blogsAtEnd = await helper.blogsInDb()

//    expect(blogsAtEnd.length).toBe(helper.initialBlogs.length)
// })

// test('a specific blog can be view', async () => {
//    const blogsAtStart = await helper.blogsInDb()

//    const blogToView = blogsAtStart[0]

//    const resultBlog = await api
//    .get(`/api/blogs/${blogToView.id}`)
//    .expect(200)
//    .expect('Content-Type', /application\/json/)

//    expect(resultBlog.body).toEqual(blogToView)

// })
// test('a blog can be deleted', async () => {
//    const blogsAtStart = await helper.blogsInDb()
//    const blogToDelete = blogsAtStart[0]
 
//    await api
//      .delete(`/api/blogs/${blogToDelete.id}`)
//      .expect(204)
 
//    const blogsAtEnd = await helper.blogsInDb()
 
//    expect(blogsAtEnd.length).toBe(
//      helper.initialBlogs.length - 1
//    )
 
//    const titles = blogsAtEnd.map(r => r.title)
 
//    expect(titles).not.toContain(blogToDelete.title)
//  })

afterAll(() => {
   mongoose.connection.close()
})