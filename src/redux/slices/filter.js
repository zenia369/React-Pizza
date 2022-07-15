import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    items: [],
    loading: true,
    actions: 'all'
};

export const fetchFilter = createAsyncThunk('pizza/fetchFilter', () => {
    return axios.get('https://62d1a098dccad0cf176b3d9d.mockapi.io/filter')
        .then(res => res.data)
}) 

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        getFilter(state) {
            return state
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchFilter.fulfilled, (state, actions) => {
            state.loading = false;
            state.items = actions.payload;
        });
        build.addCase(fetchFilter.rejected, (state, actions) => {
            state.loading = false;
            console.warn('error: ', actions.message);
        });
    }
  })
  
  export const { getFilter } = filterSlice.actions;

  export default filterSlice.reducer