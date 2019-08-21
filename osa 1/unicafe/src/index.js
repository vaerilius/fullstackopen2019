import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = (header) => (<div><h1>{header.value}</h1></div>)

const Button = (props) => (<>
    <button onClick={props.handleClick}>{props.value}</button>
</>)

const Statistics = (props) => {

    let amount = props.amount;
    if (isNaN(props.amount)) {
        amount = 0;
    }
    return (<p> {props.value} {amount} {props.pro} </p>)
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
            bad: 'bad',
            all: 'all',
            avg: 'average',
            pos: 'positive'
        }
    }
    const all = (good + bad + neutral);
    const avg = ((good - bad) / all);
    const pos = ((good / all));


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
            <Statistics value={feedback.status.all} amount={all}></Statistics>
            <Statistics value={feedback.status.avg} amount={avg}></Statistics>
            <Statistics value={feedback.status.pos} amount={pos} pro={'%'}></Statistics>

        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)
