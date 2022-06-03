import { configureStore } from "@reduxjs/toolkit";
import postReducer from './search'

export default configureStore({
    reducer: {
        posts: postReducer
    },
})