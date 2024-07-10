import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        axios.defaults.withCredentials = true;

        try {
            const res = await axios.post(
                `https://alumcentralbackend-1.onrender.com/messages/send/${selectedConversation._id}`,
                { message }
            );

            const data = res.data; // No need to use res.json() as axios handles this automatically
            if (data.error) throw new Error(data.error);

            setMessages([...messages, data]);
            console.log("Sent");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};

export default useSendMessage;
