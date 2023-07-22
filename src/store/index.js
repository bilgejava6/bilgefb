import {configureStore} from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import postSlice from './features/postSlice';
import userSlice from './features/userSlice';
import commentSlice from './features/commentSlice';


const store = configureStore({
    reducer: {
        auth: authSlice,
        post: postSlice,
        user: userSlice,
        comment: commentSlice

    }
});

export default store;