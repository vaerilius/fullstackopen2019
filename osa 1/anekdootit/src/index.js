import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

    return (
        <h1> {props.text} </h1>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState([0, 0, 0, 0, 0, 0])
    const copy = [...vote]


    const voteFor = () => {
        copy[selected] += 1
        setVote(copy)
    }

    const getSelect = () => (setSelected(Math.round(Math.random() * (anecdotes.length - 1))))

    let winner = vote[0]
    let ane = 0;
    for (let i = 0; i < vote.length; i++) {
        if (winner < vote[i]) {
            winner = vote[i]
            ane = i;
        }
    }


    return (
        <div>
            <Header text={'Anecdote of the day'}></Header>
            <div>
                {props.anecdotes[selected]}
                <br/>
                {vote[selected]}
            </div>

            <div>
                <button onClick={voteFor}>vote</button>
                <button onClick={getSelect}> next anecdone
                </button>
            </div>
            <div>
                <Header text={'Anecdote with most votes'}></Header>
            </div>
            <div>
                {props.anecdotes[ane]}
                <br/>
                has {vote[ane]} votes
            </div>

        </div>
    )
}


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)
