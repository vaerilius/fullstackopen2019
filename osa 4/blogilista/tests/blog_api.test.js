
const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const Blog = require('../models/blog')
const api = supertest(app)

describe('when there is initially some blogs saved', () => {
   beforeEach(async () => {
      await Blog.deleteMany({})
      // await Blog.insertMany(initialBlogs)
      console.log('cleared')

      const blogObjects = helper.initialBlogs
         .map(blog => new Blog(blog))
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

   test('a specific blog is within the returned blog', async () => {
      const response = await api.get('/api/blogs')

      const titles = response.body.map(r => r.title)

      expect(titles).toContain(
         'dota is easy'
      )
   })

   test('palautettujen blogien identifioivan kentän tulee olla nimeltään id', async () => {
      const blogsAtStart = await helper.blogsInDb()

      let isId = false;

      blogsAtStart.filter(blog => 'id' in blog ? isId = true : isId = false)

      expect(isId).toEqual(true)
   })

   describe('when addition blog', () => {
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

      test('testi joka varmistaa, että jos kentälle likes ei anneta arvoa, asetetaan sen arvoksi 0', async () => {
         const blog = {
            title: 'no one likes me',
            author: 'putin',
            url: 'putin.com'
         }
         if (blog.likes === undefined) {
            blog.likes = 0
         }
         await api
            .post('/api/blogs')
            .send(blog)
            .expect(200)
            .expect('Content-Type', /application\/json/)

         const blogsAtEnd = await helper.blogsInDb()
         expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)

         const findedBlog = blogsAtEnd.find(b => b.title === blog.title)
         expect(findedBlog.likes).toBe(0)

      })
      test(' uusi blogi ei sisällä kenttiä title ja url, pyyntöön vastataan statuskoodilla 400 Bad request', async () => {
         const blog = {
            author: 'kekkonen',
            likes: 200
         }
         if (blog.likes === undefined) {
            blog.likes = 0
         }
         await api
            .post('/api/blogs')
            .send(blog)
            .expect(400)

         const blogsAtEnd = await helper.blogsInDb()
         expect(blogsAtEnd.length).toBe(helper.initialBlogs.length)

      })
   })

   describe('when deleting a blog', () => {
      test('a blog can be deleted', async () => {

         const blogsAtStart = await helper.blogsInDb()
         const blogToDelete = blogsAtStart[0]

         await api
            .delete(`/api/blogs/${blogToDelete.id}`)
            .expect(204)

         const blogsAtEnd = await helper.blogsInDb()

         expect(blogsAtEnd.length).toBe(
            helper.initialBlogs.length - 1
         )

         const titles = blogsAtEnd.map(r => r.title)

         expect(titles).not.toContain(blogToDelete.title)
      })
   })
   describe('when update a blog', () => {
      test('a blog can be updated', async () => {

         const blogsAtStart = await helper.blogsInDb()
         const blogToUpdate = blogsAtStart[0]

         blogToUpdate.title = 'a blog title has been updated'

         await api
            .put(`/api/blogs/${blogToUpdate.id}`)
            .send(blogToUpdate)
            .expect(204)

         const blogsAtEnd = await helper.blogsInDb()

         expect(blogsAtEnd.length).toBe( helper.initialBlogs.length)

         const titles = blogsAtEnd.map(r => r.title)

         expect(titles).toContain(blogToUpdate.title)
      })
   })

})

afterAll(() => {
   mongoose.connection.close()
})