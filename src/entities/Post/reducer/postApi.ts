import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "..";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    // request gets all posts
    getPosts: build.query<IPost[], number>({
      query: (page: number = 1) => ({
        url: "/posts",
        params: {
          _limit: 10,
          _page: page,
        },
      }),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      providesTags: () => ["Post"],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (cache, data) => {
        cache.push(...data);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    // request gets a post by id
    getPostById: build.query<IPost[], number>({
      query: (id: number = -1) => ({
        url: "/posts",
        params: {
          id,
        },
      }),
    }),
  }),
});
