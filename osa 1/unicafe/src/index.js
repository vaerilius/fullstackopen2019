import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = (header) => (<div><h1>{header.value}</h1></div>)

const Button = (props) => (<>
    <button onClick={props.handleClick}>{props.value}</button>
</>)

const Statistics = (props) => {
    console.log(props.value)
    return (
        <div>
            <p> {props.value} {props.amount} </p>
        </div>
    )
}


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const feedback = {
        status: {
            good: 'good',
            neutral: 'neutral',
            bad: 'bad'
        }
    }


    return (
        <div>
            <Header value={'give feedback'}></Header>
            <Button handleClick={() => setGood(good + 1)} value={feedback.status.good}></Button>
            <Button handleClick={() => setNeutral(neutral + 1)} value={feedback.status.neutral}></Button>
            <Button handleClick={() => setBad(bad + 1)} value={feedback.status.bad}></Button>
            <Header value={'statistics'}></Header>
            <Statistics value={feedback.status.good} amount={good}></Statistics>
            <Statistics value={feedback.status.neutral} amount={neutral}></Statistics>
            <Statistics value={feedback.status.bad} amount={bad}></Statistics>

        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)
