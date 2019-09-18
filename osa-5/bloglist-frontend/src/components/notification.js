import React from 'react'

const Notification = ({ message, error }) => {
  if (message === null) {
    return null
  }
  const succeed = {
    color: 'green',
    fontStyle: 'italic',
    font: '16px',
    background: 'lightgrey',
    border: '1px solid green',
    margin: '10px',
    padding: '10px',
    textAlign: 'center'
  }
  const warning = {
    color: 'red',
    fontStyle: 'italic',
    font: '16px',
    background: 'lightgrey',
    border: '1px solid red',
    margin: '10px',
    padding: '10px',
    textAlign: 'center'
  }


  return (
    <div style={error ? warning: succeed}>
      {message}
    </div>
  )
}

export default Notification
