import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;


//ya imp flow hai agar nahi samja to chatgpt karo
// Component: dispatch(login("Harsh"))
//          ↓
// Store: "auth" reducer ko bhejta hai
//          ↓
// authSlice: state update karta hai  
//          ↓
// Store: Naya state save karta hai
//          ↓
// Navbar: useSelector(state => state.auth) → "Welcome Harsh!"
