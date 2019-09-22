import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../reducers/loginReducer'

const Logout = (props) => {

  const handleLogout = () => props.logout()

  return (
    <div>
      <p>{props.user.name} logged in</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  {
    logout
  })(Logout)