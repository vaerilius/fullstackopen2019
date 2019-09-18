import React from 'react'
import ReactDOM from 'react-dom'
import Part from "./part/part";


const Component = ({parts}) => {
    const rows = () => parts.map(part =>
        <Part
            key={part.id}
            name={part.name}
            exercises={part.exercises}
        />

    )

    return(
        <div>
           {rows()}
        </div>
    )
}
export default Component
