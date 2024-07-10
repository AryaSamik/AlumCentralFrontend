// import { useEffect, useState } from "react";
// import useConversation from "../zustand/useConversation";
// import axios from "axios";
// import toast from "react-hot-toast";

// const useGetMessages = () => {
// 	const [loading, setLoading] = useState(false);
// 	const { messages, setMessages, selectedConversation } = useConversation();

// 	useEffect(() => {
// 		const getMessages = async () => {
// 			setLoading(true);
// 			try {
// 				const res = await axios.get(`https://alumcentralbackend-1.onrender.com/messages/${selectedConversation._id}`,{withCredentials:true});
// 				const data = await res.json();
// 				console.log(data)
// 				if (data.error) throw new Error(data.error);
// 				setMessages(data);
// 			} catch (error) {
// 				toast.error(error.message);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		if (selectedConversation?._id) getMessages();
// 	}, [selectedConversation?._id, setMessages]);

// 	return { messages, loading };
// };
// export default useGetMessages;

import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			
			try {
                axios.defaults.withCredentials = true;
            
                const response = await axios.get(`https://alumcentralbackend-1.onrender.com/messages/${selectedConversation._id}`);
            
                const data = response.data;
				setMessages(data);
            
            } catch (error) {
                console.error("Error fetching conversations:", error.response?.data || error.message);
                toast.error(error.response?.data?.message || error.message);
            } finally {
                
                setLoading(false);
            }
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};

export default useGetMessages;

