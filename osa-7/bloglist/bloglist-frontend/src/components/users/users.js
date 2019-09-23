import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import User from './user/user'
import { initiazeUsers } from '../../reducers/usersReducer'


const Users = (props) => {

  useEffect(() => {
    props.initiazeUsers()
  }, [])

  return (
    <div>
      <h2>Users</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
          {props.users.map(user => user.username === 'root' ? null :
            <User
              key={user.id}
              userDetails={user}
            />
          )}
        </tbody>
      </table>

    </div>
  )
}

const mapStateToProps = state => {

  return { users: state.users }

}

export default connect(mapStateToProps, { initiazeUsers })(Users)