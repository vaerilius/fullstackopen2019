const dummy = (blogs) => {
return 1
}

const totalLikes = (blogs) => {
   const reducer = (sum, blog) => sum + blog.likes;
   return blogs.reduce(reducer, 0)
}
const favoriteBlog = (blogs) => {
   const blog= blogs.reduce((prev, curr) => prev.likes > curr.likes ? prev : curr)
   return blog
}

module.exports = {
   dummy,
   totalLikes,
   favoriteBlog
}
