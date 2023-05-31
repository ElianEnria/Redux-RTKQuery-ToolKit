import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    
    getTodos: builder.query({
      query: () => "/todos",
    }),
    
    getTodosByUserId: builder.query({
      query: (userID) => `/todos/${userID}`,
    }),


  }),

});

export const { useGetTodosQuery, useGetTodosByUserIdQuery } = todosApi;

