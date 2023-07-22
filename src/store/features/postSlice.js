import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import MainService from "../../config/MainService";
const initialState = {
    postlist: []
};

export const fetchGetPostList = createAsyncThunk(
    'post/fetchgetpostlist',
    async (payload)=>{
        const response = await  fetch(
            MainService.getPostList,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
          .then(res=> res.json())
          .then(result=>result)
          .catch(err=>console.log(err));
        return response;
    }
);

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(fetchGetPostList.fulfilled,(state,action)=>{
            if(action.payload.statusCode===200)
                state.postlist = action.payload.data;
        });
    }
});

export default postSlice.reducer;