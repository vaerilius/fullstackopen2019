import React from 'react'
import { BrowserRouter as Link, Router
} from 'react-router-dom'

const Blog = (props) => {

  return (
    <>

      <tr>
        <td>
          
          <a to={`/users/id`}>{props.userDetails.name}
           </a>
      
        </td>
        <td>{props.userDetails.blogs.length}</td>
      </tr>

    </>
  )
}


export default Blog