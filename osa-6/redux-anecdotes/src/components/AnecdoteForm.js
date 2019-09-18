import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {

  const createAnecdote = async (e) => {
    e.preventDefault()
    const anecName = e.target.anecdote.value
    e.target.anecdote.value = ''
    props.addAnecdote(anecName)

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