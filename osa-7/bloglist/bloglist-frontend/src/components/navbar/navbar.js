import React from 'react'
import Logout from '../../components/logout'
import { Link } from 'react-router-dom'


const Menu = () => {
  const bg = {
    padding: 5,
    backgroundColor: '#d0d0d0',
  }
  const item = {
    padding: 6,

  }
  return (
    <div style={bg}>
      <Link style={item} to="/">blogs</Link>
      <Link style={item} to="/users">users</Link>
      <Logout style={item}/>
    </div>
  )
}
export default Menu