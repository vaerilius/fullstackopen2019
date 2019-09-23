import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../reducers/loginReducer'
import { useField } from '../hooks/index'
import { Header, Input, Button } from 'semantic-ui-react'


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
           <Header as='h1'>Login to the application</Header>
            <form onSubmit={handleLogin}>
                <div>
                    käyttäjätunnus
            <Input {...username} />
                </div>
                <div>
                    salasana
            <Input {...password} />
                </div>
                <Button type="submit">Login</Button>
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