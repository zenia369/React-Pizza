import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [],
    loading: true,
    active: 'popularity',
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
        setActiveShow(state, actions) {
            state.activeShow = actions.payload
        },
        changeSort(state, actions) {
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
            });
            state.activeShow = false;
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
  
  export const { changeSort, setActiveShow } = sortSlice.actions;

  export default sortSlice.reducer