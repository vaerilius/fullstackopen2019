import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  // const store = props.store

  const createAnecdote = (e) => {
    e.preventDefault()
    const anecName = e.target.anecdote.value
    props.addAnecdote(anecName)
    e.target.anecdote.value = ''

  }
  return (
    <div >
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit' >create</button>
      </form>
    </div>

  )
}

export default connect(
  null, { addAnecdote }
)(AnecdoteForm)