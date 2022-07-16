import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    items: [],
    loading: true,
    active: 'all'
};

export const fetchFilter = createAsyncThunk('pizza/fetchFilter', () => {
    return axios.get('https://62d1a098dccad0cf176b3d9d.mockapi.io/filter')
        .then(res => res.data)
}) 

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeVariants(state, actions) {
            state.items = state.items.map(el => {
                if(el.data === actions.payload) {
                    state.active = el.data;
                    
                    return {
                        ...el,
                        active: true
                    }
                }
                return {
                    ...el, 
                    active: false
                }
            })
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
  
  export const { changeVariants } = filterSlice.actions;

  export default filterSlice.reducer