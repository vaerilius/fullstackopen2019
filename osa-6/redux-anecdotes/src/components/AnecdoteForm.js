import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = (props) => {

  const createAnecdote = async (e) => {
    e.preventDefault()
    const anecName = e.target.anecdote.value
    e.target.anecdote.value = ''

    const newAnecdote = await anecdoteService.createNew(anecName)
    console.log(newAnecdote)
    props.addAnecdote(newAnecdote)

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