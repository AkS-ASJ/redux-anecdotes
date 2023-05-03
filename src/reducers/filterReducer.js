import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filtering(state, action){
            return action.payload
        }
    }
})

export const {filtering} = filterSlice.actions
export default filterSlice.reducer