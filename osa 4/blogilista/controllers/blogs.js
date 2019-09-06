const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response, next) => {
    const blogs = await Blog.find({})
    response.json(blogs.map(blog => blog.toJSON()))

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

module.exports = blogsRouter

