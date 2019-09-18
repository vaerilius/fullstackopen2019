import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 20,
    margin: 20,
    borderWidth: 1,
    textAlign: 'center'
  }
  return (
    <>
    {props.notification === null 
      ? <> </>
      : 
      <div style={style}>
      {props.notification}
    </div>
    
    }
    </>

  )
}


const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)