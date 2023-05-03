import {createSlice} from "@reduxjs/toolkit";

const notifSlice = createSlice({
    name: 'notif',
    initialState: '',
    reducers: {
        notifAppear(state, action){
            return action.payload
        },
        notifDisappear(){
            return ''
        }
    }
})
export const {notifAppear, notifDisappear} = notifSlice.actions

export const setNotification = (content, timeout) => {
    return dispatch => {
        dispatch(notifAppear(content))
        setTimeout( () => {dispatch(notifDisappear())}, timeout)
    }
}
export default notifSlice.reducer