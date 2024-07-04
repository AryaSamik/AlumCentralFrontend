// slices/adminSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAdmin = createAsyncThunk('admin/fetchAdmin', async () => {
  const response = await axios.get('https://alumcentralbackend-1.onrender.com/admin/all');
  return response.data;
});

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    admin: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
      })
      .addCase(fetchAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default adminSlice.reducer;
