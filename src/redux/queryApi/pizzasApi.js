import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pizzasApi = createApi({
    reducerPath: 'pizzasApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://62d1a098dccad0cf176b3d9d.mockapi.io/'}),
    endpoints: (build) => ({
        getPizzas: build.query({
            query: () => 'pizzas',
        })
    })
})

export const {useGetPizzasQuery} = pizzasApi;