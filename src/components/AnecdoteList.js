import {useDispatch, useSelector} from "react-redux";
import {voteAnecdote} from "../reducers/anecdoteReducer";
import {setNotification} from "../reducers/notifReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();
    const vote = (id) => {
        const votedAnecdote = anecdotes.find(n => n.id === id)
        dispatch(voteAnecdote(votedAnecdote))
        dispatch(setNotification(`You voted "${votedAnecdote.content}"`, 3000))
    }

    return (
        <div>
            {anecdotes.filter(x => x.content.includes(filter))
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList