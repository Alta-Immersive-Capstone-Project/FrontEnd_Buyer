import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        city_id: [],
        district_id: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setCity_id: (state, action) => {
            state.city_id = action.payload;
        },
        setDistrict_id: (state, action) => {
            state.district_id = action.payload;
        },
    }
})

export const { setPosts, setCity_id, setDistrict_id } = postSlice.actions;

export default postSlice.reducer;