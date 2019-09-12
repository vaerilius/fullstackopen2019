import React, { useState, useEffect } from 'react'
import Blog from './Blog';

const UserBlogs = ({ blogs, user }) => {
    const [filterAndSortBlogs, setFilteredAndSortedBlogs] = useState([])

    const ulStyle = {
        fontSize: 16,
        listStyleType: 'none',
        padding: 10

    }

    const filterAndSort = (blogs1) => {
        let list = blogs1.filter(blog => blog.user.name === user.name)
        list = list.sort((b1, b2) => b2.likes - b1.likes)
        return list
    }

   let blogsToShow = filterAndSort(blogs)

    const rows = () => blogsToShow.map(blog => (
        <Blog
            key={blog.id}
            blog={blog}
            setBlogs={setFilteredAndSortedBlogs}
            blogs={filterAndSortBlogs}
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