import {createSlice} from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdoteSLice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        voting(state, action){
            return state.map(note =>
                note.id !== action.payload.id ? note : action.payload
            )
        },
        appendAnecdote(state, action){
            state.push(action.payload)
        },
        setAnecdotes(state, action){
            return action.payload
        }
    },

})

export const {voting, appendAnecdote, setAnecdotes} = anecdoteSLice.actions

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes))
    }
}
export const createAnecdote = content => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(appendAnecdote(newAnecdote))
    }
}
export const voteAnecdote = content => {
    return async dispatch => {
        const changedVote = {
            ...content,
            votes: content.votes + 1
        }
        const anecdoteToVote = await anecdoteService.update(content.id, changedVote)
        dispatch(voting(anecdoteToVote))
    }
}
export default anecdoteSLice.reducer