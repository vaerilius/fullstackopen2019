import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../reducers/loginReducer'
import { useField } from '../hooks/index'




const LoginForm = (props) => {
    const [username] = useField('text')
    const [password] = useField('password')

    const handleLogin = async (event) => {
        event.preventDefault()

        props.loginUser({
            username: username.value,
            password: password.value
        })
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    käyttäjätunnus
            <input {...username} />
                </div>
                <div>
                    salasana
            <input {...password} />
                </div>
                <button type="submit">kirjaudu</button>
            </form>
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
        loginUser
    })(LoginForm)