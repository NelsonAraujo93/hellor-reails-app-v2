import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRandomGreeting = createAsyncThunk('greetings/fetch', () => (
  new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/greetings/random_greeting',
    };
    axios.request(options)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  })
));
const initialState = {
  greeting: null,
  status: 'idle',
  error: '',
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomGreeting.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(getRandomGreeting.fulfilled, (state, { payload }) => ({
        ...state,
        greeting: payload.greeting,
        status: 'succeed',
      }))
      .addCase(getRandomGreeting.rejected, (state, { error }) => ({
        ...state,
        error: error.message,
        status: 'failed',
      }))
  },
});

export default greetingsSlice.reducer;
