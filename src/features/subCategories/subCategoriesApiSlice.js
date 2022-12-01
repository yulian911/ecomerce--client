import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";


export const subCategoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSubCategories: builder.query({
      query:({catId}) =>`/sub-categories?[filters][categories][id][$eq]=${catId}`
    })
  })
})

export const {
  useGetSubCategoriesQuery,
} = subCategoriesApiSlice