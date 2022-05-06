import {configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todoSlice'
import postsReducer from '../features/posts/postSlice'

export default configureStore({
  reducer: {
    todos: todosReducer,
    posts: postsReducer
  },
});