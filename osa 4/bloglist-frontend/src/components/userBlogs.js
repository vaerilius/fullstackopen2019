import React from 'react'
 import Blog from './Blog';

const UserBlogs = ({ blogs, user }) => {
    
    const blogsToShow = blogs.filter(blog => {

        try {
            if (blog.user.name === user.name) {
                return blog
            } 
            return null
        } catch (error) {
            console.log(error)
        }

 
    })


    const rows = () => blogsToShow.map(blog => (
        <Blog 
              key={blog.id}
                blog={blog}
              />

    ) 

    
    )

    return (
        <div>
            {rows()}
        </div>
    )


}
export default UserBlogs