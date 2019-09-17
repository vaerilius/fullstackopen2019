import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/filterInput'

const App = () => {

  return (
    <div>
      <h2>Programming anecdotes</h2>
      <Notification />
      <Filter />   
      <AnecdoteForm  />
      <AnecdoteList  />
    </div>
  )
}

export default App