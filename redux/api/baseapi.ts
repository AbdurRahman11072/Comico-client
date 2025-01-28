import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getSeries: builder.query({
      query: () => ({
        method: "GET",
        url: "/series",
      }),
    }),

    getslider: builder.query({
      query: () => ({
        method: "GET",
        url: "/slider",
      }),
    }),
  }),
});

export const { useGetSeriesQuery, useGetsliderQuery } = baseApi;

export default baseApi;
