import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  //khai báo baseUrl
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  // khai báo service
  tagTypes: ["Product"],
  endpoints: () => ({}),
});



