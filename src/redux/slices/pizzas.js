import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    items: [],
    loading: true,
    cartIdPizzas: []
}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', () => {
    return axios.get('https://62d1a098dccad0cf176b3d9d.mockapi.io/pizzas')
        .then(res => res.data)
}) 

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        addPizzaCount(state, actions) {
            state.items.forEach(el => {
                if(el.id === actions.payload) {
                    el.number += 1;
                    if(!state.cartIdPizzas.includes(el.id)) {
                        state.cartIdPizzas.push(el.id);
                    }
                }
            })
        },
        removePizzaCount(state, actions) {
            state.items.forEach(el => {
                if(el.id === actions.payload) {
                    el.number -= 1;
                    if(el.number <= 0) {
                        el.number = 0;
                        state.cartIdPizzas = state.cartIdPizzas.filter(el => (el !== actions.payload));
                    }
                }
            })
        },
        deleteCartItem(state, actions) {
            state.cartIdPizzas = state.cartIdPizzas.filter(el => (el !== actions.payload));
            state.items.forEach(el => {
                if(el.id === actions.payload) {
                    el.number = 0;
                }
            })
        },
        deleteAllCartItmes(state) {
            state.cartIdPizzas = [];
            state.items.forEach(el => {
                el.number = 0;
            })
        },
        settingsChange(state, actions) {
            state.items.forEach(el => {
                if(el.id === actions.payload.id) {
                    el[actions.payload.settingName] = el[actions.payload.settingName].map((el) => {
                        if(el.size === actions.payload.size) {
                            return {
                                ...el,
                                active: !el.active
                            }
                        }
                        return {
                            ...el,
                            active: false
                        }
                    })
                }
            })
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

export const { 
    getPizzas, 
    addPizzaCount, 
    removePizzaCount, 
    deleteCartItem, 
    deleteAllCartItmes,
    settingsChange
} = pizzasSlice.actions;

export default pizzasSlice.reducer