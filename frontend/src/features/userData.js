import {createSlice} from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {value:{name:'',email:'',phone:'', interviewer:'',}},
    reducers: {
        login : (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {login} = userDataSlice.actions; 
export default userDataSlice.reducer; 