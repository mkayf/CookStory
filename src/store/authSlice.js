import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authStatus : false,
    userData : null
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state, action) => {
            state.authStatus = true;
            userData = action.payload.userData;
        },
        
        logout : (state, action) => {
            state.authStatus = false;
            userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;