import React from 'react'
import { voteAnec} from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
  const store = props.store
  const anecdotes = props.store.getState().anecdotes


  const vote = (id) => {
    // console.log('vote', id)
    store.dispatch(voteAnec(id))
  }

  return (
    <div >
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}

    </div>

  )
}

export default AnecdoteList