import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
    return (
        <>
            <p> {props.part} {props.exercice} </p>
        </>
    )
};

const Header = (props) => {
    return (
        <>
            <h1> {props.course}</h1>
        </>
    )
};
const Content = (props) => {

    return (
        <>
            <Part part={props.parts[0]} exercice={props.exercices[0]}/>
            <Part part={props.parts[1]} exercice={props.exercices[1]}/>
            <Part part={props.parts[2]} exercice={props.exercices[2]}/>
        </>
    );
};

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.exercices[0] + props.exercices[1] + props.exercices[2]}</p>
        </>
    )
};

const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return (
        <div>
            <Header course={course}/>
            <Content parts={[part1,part2,part3]} exercices={[exercises1,exercises2,exercises3]} />
            <Total parts={[part1,part2,part3]} exercices={[exercises1,exercises2,exercises3]}/>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
