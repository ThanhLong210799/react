import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => ({
        url: `product`,
        method: "GET",
      }),
      providesTags: [{type: 'Product', id: 'LIST'}],
    }),

    getProduct: builder.query({
      query: (id) => ({
        url: `product?id=${id}`,
        method: "GET",
      }),
      providesTags: (id) => [{type: 'Product', id: id}],
    }),

    createProduct: builder.mutation({
        query:(data) => ({
            url: `product`,
            method: 'POST',
            params: { 
              name: data.name,
              origin: data.origin,
              price: data.price
            }
        }),
        invalidatesTags: [{type: 'Product', id: 'LIST'}]
    }),
    deleteProduct: builder.mutation({
      query:(id) => ({
          url: `product?id=${id}`,
          method: 'DELETE',
      }),
      invalidatesTags: [{type: 'Product', id: 'LIST'}]
  })
  }),
});

export const { useGetProductsQuery, useGetProductQuery, useCreateProductMutation, useDeleteProductMutation} = userApi;
