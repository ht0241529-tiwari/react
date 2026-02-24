import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;    


// payload means in login page when i put my information payload forward that data to
//  the state where it can store the data and then ui can pop the message you sucessfull login na this is payload na
// 1. Login Page → Email/Password type karo
//    ↓
// 2. Form Submit → dispatch(login(userInfo))
//    ↓ Payload = Tumhara data (email, name)
// 3. Redux Store → Data store ho jata hai  
//    ↓
// 4. UI Update → "Welcome Harsh! Successfully Login" message dikhta hai
