import React from 'react'
import { connect } from 'react-redux'
import Logout from '../../components/logout'
import { Link, Redirect } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Navbar = (props) => {
  return (
    <Menu inverted>
      <Menu.Item
        name='blogs'
      >
        <Link to="/users">users</Link>
      </Menu.Item>
      <Menu.Item
        name='users'

      >
        <Link to="/">blogs</Link>
      </Menu.Item>
      <Menu.Item
        name='login'
      >       {props.user
          ? <em><Logout /></em>
          : <Redirect to="/login" />
        }</Menu.Item>
    </Menu >








  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(Navbar)