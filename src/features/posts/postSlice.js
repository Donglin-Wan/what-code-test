import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {useDispatch}from 'react-redux'
import axios from 'axios'
import { selectTodos } from '../todos/todoSlice';

export const getPosts = createAsyncThunk('posts/getPosts', async (obj, {dispatch, getState}) => {
  const {todos} = getState()
  console.log(selectTodos, obj)
  console.log(process.env.REACT_APP_API_URL + process.env.REACT_APP_API_POST_ENDPOINT)
  return fetch(process.env.REACT_APP_API_URL + process.env.REACT_APP_API_POST_ENDPOINT).then((res)=> res.json())
})
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status:null,
  },
  extraReducers: {
    [getPosts.pending]:(state) => {
      state.status = 'loading'
    },
    [getPosts.fulfilled] : (state, {payload}) => {
      state.status = 'success'
        state.list = payload
    },
    [getPosts.reject]:  (state) => {
      state.status = 'failed'
    }
  }
})

export default postSlice.reducer 