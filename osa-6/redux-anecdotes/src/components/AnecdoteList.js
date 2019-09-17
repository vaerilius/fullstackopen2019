import React from 'react'
import { voteAnec } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReduser'


const AnecdoteList = (props) => {
  const store = props.store
  const anecdotes = props.store.getState().anecdotes
  const filter = props.store.getState().filter



  const vote = (id, anecdote) => {
    // console.log('vote', id)
    store.dispatch(voteAnec(id))

    store.dispatch(setNotification(`you voted '${anecdote.content}'`))

    setTimeout(() => {
      store.dispatch(removeNotification())
    }, 5000)


  }

  return (
    <div >
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => anecdote.content.toUpperCase().includes(filter.toUpperCase()) ?
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote)}>vote</button>
          </div>
        </div>
      :
      null)}

    </div>

  )
}

export default AnecdoteList