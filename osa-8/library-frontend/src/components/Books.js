import React, { useState, useEffect} from 'react'

const Books = ({ show, books }) => {

  const [genre, setGenre] = useState(null)

  if (!show) {
    return null
  }
  if (!books.data || genre === undefined) {
    return <div>loading...</div>
  }


  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {genre ?
            books.data.allBooks
              .filter(b => b.genres.includes(genre))
              .map(a =>
                <tr key={a.title}>
                  <td>{a.title}</td>
                  <td>{a.author.name}</td>
                  {a.published ?
                <td>{a.published}</td>
                :
                null
              }
                </tr>
              )
              :
              books.data.allBooks
              .map(a =>
                <tr key={a.title}>
                  <td>{a.title}</td>
                  <td>{a.author.name}</td>
                  {a.published ?
                <td>{a.published}</td>
                :
                null
              }
                </tr>
              )

            }
        </tbody>
      </table>
      <button onClick={() => setGenre('disco')}>disco</button>
      <button onClick={() => setGenre('crime')}>crime</button>
      <button onClick={() => setGenre(null)}>all</button>

    </div>
  )
}

export default Books