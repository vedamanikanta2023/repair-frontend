import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSession } from 'next-auth/react'

export const apiSlice = createApi({
  reducerPath: 'api', // Unique reducer path for this API slice
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_DOMAIN, // Replace with your actual API base URL
    // You can add headers or other configurations here if needed
    prepareHeaders: async(headers, { getState }) => {
      const token = getState() // Example for adding auth token
      const session = await getSession()  // fetches active session from NextAuth

      if (session.accessToken) {
        headers.set('authorization', `Bearer ${session.accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define your specific API endpoints here (queries and mutations)
    // Example:
    getPosts: builder.query({
      query: () => '/',
    }),
    getUserDetails: builder.query({
      query: (id) => '/userdetails/'+String(id),
    }),
    // addPost: builder.mutation({
    //   query: (newPost) => ({
    //     url: '/posts',
    //     method: 'POST',
    //     body: newPost,
    //   }),
    // }),
  }),
});

// Export auto-generated hooks for your endpoints (if defined)
export const { useGetPostsQuery, useGetUserDetailsQuery } = apiSlice;