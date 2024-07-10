// import { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const useGetConversations = () => {
//     const [loading, setLoading] = useState(false);
//     const [conversations, setConversations] = useState([]);
//     useEffect(() => {
//         const getConversations = async () => {
//             setLoading(true);
//             try {
//                 axios.defaults.withCredentials = true;

//                 const response = await axios.get("https://alumcentralbackend-1.onrender.com/users/conversations");
//                 const data = response.data;
//                 setConversations(data);
//                 console.log("Conversations fetched:", data);
//             } catch (error) {
//                 console.error("Error fetching conversations:", error.response?.data || error.message);
//                 toast.error(error.response?.data?.message || error.message);
//             } finally {
//                 console.log("called");
//                 setLoading(false);
//             }
//         };

//         getConversations();
//     }, []);

//     return { loading, conversations };
// };

// export default useGetConversations;

// conversationsSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// Async thunk to fetch conversations
 const GetConversations = createAsyncThunk(
    'conversations/fetchConversations',
    async (_, { rejectWithValue }) => {
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.get('https://alumcentralbackend-1.onrender.com/users/conversations');
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
            toast.error(errorMessage);
            return rejectWithValue(errorMessage);
        }
    }
);

export default GetConversations;