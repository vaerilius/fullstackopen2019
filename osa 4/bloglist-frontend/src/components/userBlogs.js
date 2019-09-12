import React from 'react'
 import Blog from './Blog';

const UserBlogs = ({ blogs, user }) => {

    const ulStyle = {
        fontSize: 16,
        listStyleType: 'none',
        padding: 10
        
      }
    
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
        <ul style={ulStyle}>
            {rows()}
        </ul>
    )


}
export default UserBlogs