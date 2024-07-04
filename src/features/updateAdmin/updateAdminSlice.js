// src/features/admin/adminSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    unverifiedAdmin: [],
    status: 'idle',
    error: null,
};

export const fetchUnverifiedAdmins = createAsyncThunk(
    'admin/fetchUnverifiedAdmins',
    async () => {
        const response = await axios.get('https://alumcentralbackend-1.onrender.com/admin/all');
        return response.data.filter(admin => !admin.verified);
    }
);

export const verifyAdmin = createAsyncThunk(
    'admin/verifyAdmin',
    async (adminId, { rejectWithValue }) => {
        try {
            await axios.post(`https://alumcentralbackend-1.onrender.com/admin/verify/${adminId}`);
            return adminId;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteAdmin = createAsyncThunk(
    'admin/deleteAdmin',
    async (adminId, { rejectWithValue }) => {
        try {
            await axios.delete(`https://alumcentralbackend-1.onrender.com/admin/delete/${adminId}`);
            return adminId;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const updateadminSlice = createSlice({
    name: 'updateadmin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUnverifiedAdmins.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUnverifiedAdmins.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.unverifiedAdmin = action.payload;
            })
            .addCase(fetchUnverifiedAdmins.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(verifyAdmin.fulfilled, (state, action) => {
                state.unverifiedAdmin = state.unverifiedAdmin.filter(admin => admin._id !== action.payload);
            })
            .addCase(deleteAdmin.fulfilled, (state, action) => {
                state.unverifiedAdmin = state.unverifiedAdmin.filter(admin => admin._id !== action.payload);
            });
    },
});

export default updateadminSlice.reducer;
