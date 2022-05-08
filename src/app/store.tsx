import {configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todoSlice'
import { postsApi } from "../service/postsApi";

export default configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(postsApi.middleware),
});