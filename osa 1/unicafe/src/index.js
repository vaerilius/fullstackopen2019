import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = (header) => (<div><h1>{header.value}</h1></div>)

const Button = (props) => (<>
    <button onClick={props.handleClick}>{props.data}</button>
</>)

const Statistics = (props) => {

    if (isNaN(props.data.amounts.avg)) {
        return (
            <>
                <NoFeedback></NoFeedback>
            </>
        )
    }
    return (
        <div>
            <p>{props.data.status.good} {props.data.amounts.good} </p>
            <p>{props.data.status.neutral} {props.data.amounts.neutral} </p>
            <p>{props.data.status.bad} {props.data.amounts.bad} </p>
            <p>{props.data.status.all} {props.data.amounts.all} </p>
            <p>{props.data.status.avg} {props.data.amounts.avg} </p>
            <p>{props.data.status.pos} {props.data.amounts.pos} </p>
        </div>

    )
}


const NoFeedback = () => (<div><p> No feedback given</p></div>)


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const statistics = {
        amounts: {
            good: good,
            neutral: neutral,
            bad: bad,
            all: (good + bad + neutral),
            avg: ((good - bad) / (good + bad + neutral)),
            pos: (good / (good + bad + neutral)),
            isGivenFeedback: false
        },
        status: {
            good: 'good',
            neutral: 'neutral',
            bad: 'bad',
            all: 'all',
            avg: 'average',
            pos: 'positive'
        }
    }


    return (
        <div>
            <Header value={'give feedback'}/>
            <Button handleClick={() => setGood(good + 1)} data={statistics.status.good}/>
            <Button handleClick={() => setNeutral(neutral + 1)} data={statistics.status.neutral}/>
            <Button handleClick={() => setBad(bad + 1)} data={statistics.status.bad}/>
            <Header value={'statistics'}/>
            <Statistics data={statistics}/>
        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)
