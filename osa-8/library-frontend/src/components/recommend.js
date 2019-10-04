import React from 'react'

const Recommend = ({ show, booksByGenre, me }) => {

  if (!show) {
    return null
  }
  if ( !booksByGenre ) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h2>recommendations</h2>

      <p>Books in your favorite genre <strong>{me.data.me.favoriteGenre}</strong></p>
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
          {booksByGenre
          .map(b =>
              <tr key={b.title}>
                <td>{b.title}</td>
                <td>{b.author.name}</td>
                <td>{b.published}</td>
              </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Recommend