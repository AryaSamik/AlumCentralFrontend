// conversationsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import  GetConversations  from '../hooks/useGetConversations';

const conversationsSlice = createSlice({
    name: 'conversations',
    initialState: {
        loading: false,
        conversations: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetConversations.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetConversations.fulfilled, (state, action) => {
                state.loading = false;
                state.conversations = action.payload;
                state.error = null;
            })
            .addCase(GetConversations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default conversationsSlice.reducer;
