import React, { useState } from 'react'
import SetBornForm from './setBornForm'


const Authors = ({ show, result, updateAuthor, token }) => {
  const [name, setName] = useState('')

  if (!show) {
    return null
  }
  if (result.loading) {
    return <div>loading...</div>
  }
  if (result.data === undefined) {
    return <div>loading...</div>
  }
 
  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {result.data.allAuthors.map(a =>
            <tr key={a.name}>
              <td style={{cursor: "pointer"}}
              
              onClick={() => setName(a.name)}>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>

      {!token ? null :
      <SetBornForm 
      updateAuthor={updateAuthor}
      name={name}
      />
      }


    </div>
  )
}

export default Authors