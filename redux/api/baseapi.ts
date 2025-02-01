import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000` }),
  endpoints: (builder) => ({
    // start
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

    getSingleSeries: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/series/${id}`,
      }),
    }),
    // end
  }),
});

export const { useGetSeriesQuery, useGetsliderQuery, useGetSingleSeriesQuery } =
  baseApi;

export default baseApi;
