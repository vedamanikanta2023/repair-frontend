import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSession } from 'next-auth/react'

export const apiSlice = createApi({
  reducerPath: 'api', // Unique reducer path for this API slice
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_DOMAIN, // API base URL
    prepareHeaders: async(headers, { getState }) => {
      const session = await getSession()  // fetches active session from NextAuth

      if (session.user.accessToken) {
        headers.set('authorization', `Bearer ${session.user.accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/',
    }),
    getUserDetails: builder.query({
      query: (id) => `/userdetails/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetUserDetailsQuery } = apiSlice;