// features/alumni/alumniSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAlumni = createAsyncThunk(
  'alumni/fetchAlumni',
  async () => {
    const response = await axios.get('https://alumcentralbackend-1.onrender.com/alumni/all');
    return response.data;

  }
);

const alumniSlice = createSlice({
  name: 'alumni',
  initialState: {
    alumni: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlumni.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAlumni.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.alumni = action.payload;
      })
      .addCase(fetchAlumni.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default alumniSlice.reducer;
