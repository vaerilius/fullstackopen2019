import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../reducers/loginReducer'
import { Button } from 'semantic-ui-react'



const Logout = (props) => {

  const handleLogout = () => props.logout()

  return (
    <>
     {props.user.name} logged in <Button onClick={handleLogout}>logout</Button>
      
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