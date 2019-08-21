import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = (header) => (<div><h1>{header.value}</h1></div>)

const Button = (props) => (<>
    <button onClick={props.handleClick}>{props.data}</button>
</>)

const Statistic = (props) => {

    return (
        <table>
            <tbody>
            <tr>
                <td>{props.data.status.good}  </td>
                <td>{props.data.amounts.good}</td>
            </tr>
            <tr>
                <td>{props.data.status.neutral}</td>
                <td> {props.data.amounts.neutral} </td>
            </tr>
            <tr>
                <td>{props.data.status.bad}  </td>
                <td>{props.data.amounts.bad}</td>
            </tr>
            <tr>
                <td>{props.data.status.all}  </td>
                <td>{props.data.amounts.all}</td>
            </tr>
            <tr>
                <td>{props.data.status.avg}  </td>
                <td>{props.data.amounts.avg}</td>
            </tr>
            <tr>
                <td>{props.data.status.pos}  </td>
                <td>{props.data.amounts.pos}</td>
            </tr>
            </tbody>
        </table>


    )
}

const Statistics = (props) => {

    if (isNaN(props.data.amounts.avg)) {
        return (
            <>
                <NoFeedback></NoFeedback>
            </>
        )
    }
    return (
        <>
            <Statistic data={props.data}></Statistic>
        </>
    )
}


const NoFeedback = () => (<><p> No feedback given</p></>)


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
