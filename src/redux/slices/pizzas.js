import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    items: [],
    loading: true,
}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', () => {
    return axios.get('https://62d1a098dccad0cf176b3d9d.mockapi.io/pizzas')
        .then(res => res.data)
}) 

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        getPizzas(state) {
            return state
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchPizzas.fulfilled, (state, actions) => {
            state.loading = false;
            state.items = actions.payload;
        });
        build.addCase(fetchPizzas.rejected, (state, actions) => {
            state.loading = false;
            console.warn('error: ', actions.message);
        });
    }
})

export const { getPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer