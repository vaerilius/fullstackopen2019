import anecdoteService from '../services/anecdotes';

const reducer = (state = [], action) => {


  switch (action.type) {
    case 'VOTE_ANECDOTE':
      const id = action.data.id
      const anecdote = state.find(a => a.id === id)

      return state.filter(a => a.id !== a ? a : anecdote).sort((a1, a2) => a2.votes - a1.votes)
    case 'ADD_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }


}

export const voteAnec = (anecdote) => {
  // console.log(anecdote)
  return async dispatch => {
    const newAnec = {
      ...anecdote,
      votes: anecdote.votes++
    }
  
    const updatedAnecdote = await anecdoteService.vote(newAnec)
    dispatch( {
      type: 'VOTE_ANECDOTE',
      data: updatedAnecdote
  
    })
  }
  

}

export const addAnecdote = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }

}


export default reducer