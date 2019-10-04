import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Login from './components/login'
import Recommend from './components/recommend'

const ALL_AUTHORS = gql`
{
  allAuthors {
    name
    born
    bookCount
  }
}
`
const ALL_BOOKS = gql`
{
  allBooks {
    title
    author {
      name
      id
      born
      bookCount
    }
    published
    id
    genres
  }
}
`
const BOOKS_BY_GENRE = gql`
query booksByGenre($genre: String!){
  allBooks(genre: $genre) {
    title
    author {
      name
    }
    published
  }
}
`
const CREATE_BOOK = gql`
mutation addBook($title: String!, $published: Int!, $author: String!, $genres: [String]!) {
  addBook(
    title: $title,
    author: $author,
    published: $published,
    genres: $genres
  ) {
    title
    author { name }
    id
  }
}
`
const UPDATE_AUTHOR = gql`
mutation editAuthor($name: String!, $born: Int!) {
  editAuthor(name: $name, setBornTo: $born) {
    name
    born
  }
}`

const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      value
    }
  }
`
const ME = gql`
{
  me {
    username
    favoriteGenre
  }
}
`


const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [booksByGenre, setBooksByGenre] = useState([])

  useEffect(() => {
    if (user) {
     getBooksByGentre(user.favoriteGenre)
    }

  }, [user])

  const handleError = (error) => {
    setErrorMessage(error.graphQLErrors[0].message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }
  const client = useApolloClient()

  const [page, setPage] = useState('authors')

  const authors = useQuery(ALL_AUTHORS)
  const books = useQuery(ALL_BOOKS)
  const me = useQuery(ME)

  const getBooksByGentre = async (genre) => {
    const { data } = await client.query({
      query: BOOKS_BY_GENRE,
      variables: { genre: genre }
    })
    setBooksByGenre(data.allBooks)

  }

  const [addBook] = useMutation(CREATE_BOOK, {
    onError: handleError,
    refetchQueries:
     [{ query: ALL_BOOKS, ALL_AUTHORS }],
    update: (store, response) => {
      const dataInStore = store.readQuery({ query: ALL_BOOKS })
      dataInStore.allBooks.push(response.data.addBook)
      store.writeQuery({
        query: ALL_BOOKS,
        data: dataInStore
      })
    }

  })

  const [updateAuthor] = useMutation(UPDATE_AUTHOR, {
    onError: handleError,
    refetchQueries: [{ query: ALL_AUTHORS }]
  })

  const [login] = useMutation(LOGIN, {
    onError: handleError
  })

  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }


  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        {token && <button onClick={() => setPage('add')}>add book</button>}
        {token && <button onClick={() => setPage('recommend')}>recommend</button>}
        {!token
          ?
          <button onClick={() => setPage('login')}>login</button>
          :
          <button onClick={() => logout()}>Logout</button>
        }
      </div>
      {errorMessage &&
        <div style={{ color: 'red' }}>
          {errorMessage}
        </div>
      }
      <Authors
        show={page === 'authors'}
        result={authors}
        updateAuthor={updateAuthor}
        token={token}
      />
      <Books
        show={page === 'books'}
        books={books}
      />
      <NewBook
        show={page === 'add'}
        addBook={addBook}
        setBooksByGenre={setBooksByGenre}
        booksByGenre={booksByGenre}
      />
      <Recommend
        show={page === 'recommend'}
        me={me}
        booksByGenre={booksByGenre}
      />


      <Login
        show={page === 'login'}
        login={login}
        setToken={setToken}
        token={token}
        setUser={setUser}
        me={me}
      />
    </div>
  )
}

export default App