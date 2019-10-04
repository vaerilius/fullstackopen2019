import React, { useState } from 'react'

const Login = ( props ) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    if (!props.show) {
        return null
      }
    const handleLogin = async (e) => {
        e.preventDefault()
        const result = await props.login({
            variables: { username, password }
          })

          if (result) {
            const token = result.data.login.value
            props.setToken(token)
            localStorage.setItem('user-token', token)
            props.setUser(props.me.data.me)

          }
          setPassword('')
          setUsername('')
        }
 
        

    return(
        <div style={{margin: "3rem", padding: "3rem"}}>
        <form onSubmit={handleLogin}>
            username:
            <input
            value={username}
            type="text"
            onChange={({ target }) => setUsername(target.value)}
            />
            <br />
            password:
            <input
            value={password}
            type="password"
            onChange={({ target }) => setPassword(target.value)}
            />
            <br />

            <button type="submit">Login</button>
        </form>
    </div>
    )

}

export default Login