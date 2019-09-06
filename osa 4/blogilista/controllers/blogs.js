const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response, next) => {
    const blogs = await Blog.find({})
    response.json(blogs.map(blog => blog.toJSON()))

})
blogsRouter.get('/:id', async (request, response, next) => {

    try {
        const blog = await Blog.findById(request.params.id)
        if (blog) {
            response.json(blog.toJSON())
        } else {
            response.status(404).end()
        }
    } catch (error) {
        next(error)
    }

})


blogsRouter.post('/', async (request, response, next) => {

    const blog = new Blog(request.body)
    try {
        const savedBlog = await blog.save()
        response.json(savedBlog.toJSON())
    } catch (error) {
        next(error)
    }

    // blog
    //     .save()
    //     .then(result => {
    //         response.status(201).json(result)
    //     })
    //     .catch(err => next(err))
})

blogsRouter.delete('/:id', async (request, response, next) => {

    try {
      await Blog.findByIdAndDelete(request.params.id)
        response.status(204).end()
    } catch (error) {
        next(error)
    }

})
blogsRouter.put('/:id', async (request, response, next) => {
    const body = request.body

    const blog = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    }
    
    try {
        await Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
        response.status(204).end()
    } catch (error) {
        next(error)
    }
})

module.exports = blogsRouter

