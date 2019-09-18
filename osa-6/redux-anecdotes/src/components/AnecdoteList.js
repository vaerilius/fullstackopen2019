import React from 'react'
import { connect } from 'react-redux'
import { voteAnec } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReduser'


const AnecdoteList = (props) => {

  const vote = (anecdote) => {
    props.voteAnec(anecdote)
    props.setNotification(`you voted '${anecdote.content}'`, 3000)
  }

  return (
    <div >
      <h2>Anecdotes</h2>
      {props.visibleAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}

    </div>

  )
}
const anecdotesToShow = ({anecdotes, filter}) => {
  if (filter === null) {
    return anecdotes
  }
  return anecdotes.filter(anecdote => anecdote.content.toUpperCase().includes(filter.toUpperCase()))
  }


const mapDispatchToProps = {
  voteAnec,
  setNotification
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)