import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', // Unique reducer path for this API slice
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_DOMAIN, // Replace with your actual API base URL
    // You can add headers or other configurations here if needed
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token; // Example for adding auth token
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
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
export const { useGetPostsQuery } = apiSlice;