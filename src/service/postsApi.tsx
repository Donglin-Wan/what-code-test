import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../models/post.model';

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => 'api/v1/posts/',
            providesTags: ['Post']
        }),
        getPost: builder.query<{}, string>({
            query: (id) => `api/v1/posts/${id}`,
            providesTags: ['Post']
        }),
        addPost: builder.mutation<{}, {}>({
            query: contact => ({
                url: 'api/v1/posts/',
                method: 'POST',
                body: contact
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: builder.mutation<{}, Post>({
            query: ({ id, ...rest }) => ({
                url: `api/v1/posts/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: builder.mutation<void, string>({
            query: (id) => ({
                url: `api/v1/posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        })
    })
})

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = postsApi;