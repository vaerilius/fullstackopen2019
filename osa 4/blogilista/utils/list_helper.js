const dummy = (blogs) => {
   return 1
}

const totalLikes = (blogs) => {
   const reducer = (sum, blog) => sum + blog.likes;
   return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
   const blog = blogs.reduce((prev, curr) => prev.likes > curr.likes ? prev : curr)
   return blog
}

const mostBlogs = (blogs) => {
   const list = []
   let mostBlogs = { author: '', blogs: 0 };

   blogs.forEach((blog) => {
      if (!list[blog.author]) {
         list[blog.author] = { author: blog.author, blogs: 0 }
      }
      list[blog.author].blogs += 1
      if (mostBlogs.blogs < list[blog.author].blogs) {
         mostBlogs = list[blog.author]
      }
   });

   return mostBlogs
}

const mostLikes = (blogs) => {
   const list = []
   let mostLikesBlog = { author: '', likes: 0 };

   blogs.forEach((blog) => {
      if (!list[blog.author]) {
         list[blog.author] = { author: blog.author, likes: 0 }
      }
      list[blog.author].likes += blog.likes 
      if (mostLikesBlog.likes < list[blog.author].likes) {
         mostLikesBlog = list[blog.author]
      }
   });

   return mostLikesBlog
}

module.exports = {
   dummy,
   totalLikes,
   favoriteBlog,
   mostBlogs,
   mostLikes
}
