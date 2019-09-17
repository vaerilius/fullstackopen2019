import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }



  return (
    <>
    {props.notification == null 
      ? <> </>
      : 
      <div style={style}>
      {props.notification}
    </div>
    
    }
    </>

  )
}

export default connect(null, )(Notification)