import { configureStore } from "@reduxjs/toolkit";
import postReducer from './search'
import bookingReducer from './transaction'

export default configureStore({
    reducer: {
        posts: postReducer,
        booking: bookingReducer
    },
})