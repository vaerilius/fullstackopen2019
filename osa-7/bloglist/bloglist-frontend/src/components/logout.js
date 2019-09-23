import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../reducers/loginReducer'

const Logout = (props) => {

  const handleLogout = () => props.logout()

  return (
    <>
     {props.user.name} logged in <button onClick={handleLogout}>logout</button>
      
    </>
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