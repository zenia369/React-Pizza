import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [],
    loading: true,
    active: 'all',
    activeShow: false,
}

export const fetchSort = createAsyncThunk('pizza/fetchSort', () => {
    return axios.get('https://62d1a098dccad0cf176b3d9d.mockapi.io/sort')
        .then(res => res.data)
}) 

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        getSort(state) {
            return state
        },
        setActiveShow(state, actions) {
            state.activeShow = actions.payload
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchSort.fulfilled, (state, actions) => {
            state.loading = false;
            state.items = actions.payload;
        });
        build.addCase(fetchSort.rejected, (state, actions) => {
            state.loading = false;
            console.warn('error: ', actions.message);
        });
    }
  })
  
  export const { getSort, setActiveShow } = sortSlice.actions;

  export default sortSlice.reducer