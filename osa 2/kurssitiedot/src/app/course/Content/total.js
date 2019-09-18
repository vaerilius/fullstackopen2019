import React from 'react'


const Total = ({total}) => {
    const arr = total.map(exe => exe.exercises)
    const totalExercise = arr.reduce((s, p) => s + p)

    return (
        <p>
            <strong> total of {totalExercise} exercises</strong>

        </p>
    )
}
export default Total
