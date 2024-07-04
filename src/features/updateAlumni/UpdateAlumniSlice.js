import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    unverifiedAlumni: [],
    status: 'idle',
    error: null,
};

export const fetchUnverifiedAlumni = createAsyncThunk(
    'alumni/fetchUnverifiedAlumni',
    async () => {
        const response = await axios.get('https://alumcentralbackend-1.onrender.com/alumni/all');
        return response.data.filter(alumnus => !alumnus.verified);
    }
);

export const verifyAlumnus = createAsyncThunk(
    'alumni/verifyAlumnus',
    async (alumnusId, { rejectWithValue }) => {
        try {
            await axios.post(`https://alumcentralbackend-1.onrender.com/alumni/verify/${alumnusId}`);
            return alumnusId;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteAlumnus = createAsyncThunk(
    'alumni/deleteAlumnus',
    async (alumnusId, { rejectWithValue }) => {
        try {
            await axios.delete(`https://alumcentralbackend-1.onrender.com/alumni/delete/${alumnusId}`);
            return alumnusId;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const UpdateAlumniSlice = createSlice({
    name: 'Updatealumni',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUnverifiedAlumni.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUnverifiedAlumni.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.unverifiedAlumni = action.payload;
            })
            .addCase(fetchUnverifiedAlumni.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(verifyAlumnus.fulfilled, (state, action) => {
                state.unverifiedAlumni = state.unverifiedAlumni.filter(alumnus => alumnus._id !== action.payload);
            })
            .addCase(deleteAlumnus.fulfilled, (state, action) => {
                state.unverifiedAlumni = state.unverifiedAlumni.filter(alumnus => alumnus._id !== action.payload);
            });
    },
});

export default UpdateAlumniSlice.reducer;
