import React, { useState } from 'react'

const SetBorn = ({ updateAuthor, name }) => {

    const [born, setBorn] = useState('')

    const submit = async (e) => {
        e.preventDefault()

    
        await updateAuthor({
          variables: { name, born }
        })
    
        setBorn('')
      }

    return (
        <div>
        <form onSubmit={submit}>
            <h2>Set birthyear</h2>
            <p>click author name and update birthyear</p>
            <div style={{ border: '1px solid black', padding: '15px' }}>
                selected author: { name }
            </div>
        {/* <input
            value={name}
            onChange={({ target }) => setName(target.value)} /> */}
            <br />
            born
        <input
            value={born}
            onChange={({ target }) => setBorn(parseInt(target.value))}

            />
            <br />
            <button type='submit'>update author</button>
            </form>
        </div>
    )
}

export default SetBorn
