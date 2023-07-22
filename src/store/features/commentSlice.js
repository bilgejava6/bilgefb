import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import MainService from "../../config/MainService";
const initialState = {
    commentList: []
};

/**
 * Post id si verilen post a ait yorumları listeler
 * @param {token, postid} payload
 */
export const fetchGetCommentList = createAsyncThunk(
    'post/fetchgetcommentlist',
    async (payload)=>{
        const response = await  fetch(
            MainService.getCommentByPostId,{
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

/**
 * Bir post a yorum yazmak için kullanılır.
 * @param { token, postid, userid, comment} payload
 */
export const fetchCreateComment = createAsyncThunk(
    'post/fetchcreatecomment',
    async (payload)=>{
        const response = await  fetch(
            MainService.createComment,{
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



const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(fetchGetCommentList.fulfilled,(state,action)=>{
            state.commentList = action.payload;
        });
    }
});

export default commentSlice.reducer;