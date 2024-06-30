import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsJsonApi = createApi({
  reducerPath: "postsFromJson",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllThePosts: builder.query({
      query: ({ page = 1, limit = 10 }) =>
        `posts?limit=${limit}&skip=${(page - 1) * limit}`,
      transformResponse: (response) => {
        return {
          posts: response.posts || [],
          total: response.total,
          limit: response.limit,
          skip: response.skip,
        };
      },
    }),
  }),
});

export const { useGetAllThePostsQuery } = postsJsonApi;
