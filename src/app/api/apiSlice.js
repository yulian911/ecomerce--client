import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:1337/api',

  prepareHeaders: (headers) => {
   headers.set("authorization", `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`)  
  }
})

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ['Products', 'Categories'],
  endpoints: builder => ({})
})