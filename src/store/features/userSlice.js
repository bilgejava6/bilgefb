import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import MainService from "../../config/MainService";

const initialState = {
    profile: [],
    newusers: []
};

/**
 * Bu method da kullanıcı profil bilgileri kısmi olarak gelmektedir.
 * @param {token} payload
 */
export const fetchGetProfile = createAsyncThunk(
    'user/fetchgetprofile',
    async (payload)=>{
        const response = await   fetch(
            MainService.getProfileByToken,{
            method: 'post',      
            headers:{       
              'Content-Type': 'application/json',
              'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5'
            },
            body: JSON.stringify(payload)
          })
          .then(data=>data.json())
          .then(data=>data)
          .catch(hata=>{
            alert(hata.message);
          })
          return response;
    }
);

/**
 * Bu method da yeni kullanıcı bilgileri gelmektedir.
 * @param {token} payload
 */
export const fetchGetNewUsers = createAsyncThunk(
    'user/fetchgetnewusers',
    async (payload)=>{
        const response = await   fetch(
            MainService.getNewUserList,{
            method: 'post',      
            headers:{       
              'Content-Type': 'application/json',
              'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5'
            },
            body: JSON.stringify(payload)
          })
          .then(data=>data.json())
          .then(data=>data)
          .catch(hata=>{
            alert(hata.message);
          })
          return response;
    }
);

const userSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(fetchGetProfile.fulfilled,(state,action)=>{
            if(action.payload.statusCode===200)
                state.profile = action.payload.data;
        });
        build.addCase(fetchGetNewUsers.fulfilled,(state,action)=>{
            if(action.payload.statusCode===200)
                state.newusers = action.payload.data;
        });
    }
});

export default userSlice.reducer;