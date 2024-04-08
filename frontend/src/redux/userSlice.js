import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false,
    userData:{
        email:null,
        name:null,
        accessToken:null
    }
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        logInUser:(state, action)=>{
            state.isLoggedIn = true            
            state.userData.email = action.payload.email
            state.userData.name = action.payload.name
            state.userData.accessToken = action.payload.accessToken
        },
        logOutUser : (state)=>{
            state.isLoggedIn = false
            state.userData.email = null
            state.userData.accessToken = null
        }
    }
})

export const { logInUser, logOutUser } = userSlice.actions
export default userSlice.reducer