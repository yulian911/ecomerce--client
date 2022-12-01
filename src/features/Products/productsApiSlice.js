import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";


export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllProductsCategories: builder.query({
      query:({catId,subCats,sort,maxPrice}) => `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
        (item) => `&[filters][sub_categories][id][$eq]=${item}`
      )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    }),
    getProducts: builder.query({
      query:({type}) =>`products?populate=*&[filters][type][$eq]=${type}`
    })
  })
})

export const {
  useGetProductsQuery,
  useGetAllProductsCategoriesQuery,
} = productsApiSlice