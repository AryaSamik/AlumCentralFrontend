import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const response = await axios.get("https://alumcentralbackend-1.onrender.com/users/conversations", {withCredentials:true});
                const data = response.data;
                setConversations(data);
                console.log("Conversations fetched:", data);
            } catch (error) {
                console.error("Error fetching conversations:", error.response?.data || error.message);
                toast.error(error.response?.data?.message || error.message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, []);

    return { loading, conversations };
};

export default useGetConversations;
