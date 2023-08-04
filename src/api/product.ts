import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { IProduct } from "../interface/product"

const productAPI = createApi({
    reducerPath:"product",
    tagTypes:["Product"],
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3000",
    }),
    endpoints: (builder) =>({
        getProducts: builder.query<IProduct, void>({
            query: () => `/products`,
            providesTags: ['Product']
        }),
        getProductsById: builder.query<IProduct, number | string>({
            query: (id) => `/products/${id}`,
            providesTags: ['Product']
        }),
        addProducts: builder.mutation({
            query: (product: IProduct) => ({
                url: `/products`,
                method: "POST",
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        updateProducts: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: "PATCH",
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        deleteProducts: builder.mutation<void, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Product']
        })

    })
})
export const {useGetProductsQuery,useGetProductsByIdQuery,useAddProductsMutation,useUpdateProductsMutation,useDeleteProductsMutation} = productAPI
export const productReducer = productAPI.reducer
export default productAPI