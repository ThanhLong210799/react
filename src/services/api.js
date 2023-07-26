import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
// khai báo query và mutation
    getProducts: builder.query({
      query: (data) => ({
        url: `product?name=${data}`,
        method: "GET",
      }),
      providesTags: [{type: 'Product', id: 'LIST'}],
    }),

    getProduct: builder.query({
      query: (id) => ({
        url: `product/id?id=${id}`,
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

// export các use ứng với các query và mutation
export const { useGetProductsQuery, useGetProductQuery, useCreateProductMutation, useDeleteProductMutation} = userApi;
