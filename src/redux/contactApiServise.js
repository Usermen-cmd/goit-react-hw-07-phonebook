import { changeFilter } from 'redux/actions';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://60ae1fea80a61f00173327f3.mockapi.io/',
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    getContactByName: builder.query({
      query: () => 'contacts',
      providesTags: ['contact'],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['contact'],
    }),
    addContact: builder.mutation({
      query(body) {
        return {
          url: 'contacts',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['contact'],
    }),
  }),
});

export const {
  useGetContactByNameQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactApi;

const initState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const filter = createReducer(initState.filter, {
  [changeFilter]: (_, action) => action.payload,
});

export const rootReducer = combineReducers({
  filter,
  [contactApi.reducerPath]: contactApi.reducer,
});
