import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './http-query-client';
import { API } from '../../app/constants/API';
export const baseUrl = API;
export const UserTag = 'Users';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => ({ url: `/users`, method: 'GET' })
    }),
    login: builder.mutation({
      query: account => ({
        url: '/auth/login',
        method: 'POST',
        data: { ...account }
      })
    }),
    signUp: builder.mutation({
      query: account => ({
        url: '/auth/register',
        method: 'POST',
        data: { ...account }
      })
    }),
    updateImage: builder.mutation({
      query: account => ({
        url: `/users/${account.id}`,
        method: 'PATCH',
        data: { ...account }
      })
    }),
    updateNameOrPassword: builder.mutation({
      query: account => ({
        url: `/users/${account.id}`,
        method: 'PUT',
        data: { ...account }
      })
    }),
    verifyPassword: builder.mutation({
      query: data => ({
        url: `/users/verify`,
        method: 'POST',
        data: { ...data }
      })
    })
  })
});

export const {
  useGetUsersQuery,
  useLoginMutation,
  useSignUpMutation,
  useUpdateImageMutation,
  useUpdateNameOrPasswordMutation,
  useVerifyPasswordMutation
} = apiSlice;
