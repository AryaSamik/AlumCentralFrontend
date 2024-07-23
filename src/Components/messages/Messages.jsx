// import { useEffect, useRef } from "react";
// import useGetMessages from "../../hooks/useGetMessages";
// import MessageSkeleton from "../skeletons/MessageSkeleton";
// import Message from "./Message";
// import useListenMessages from "../../hooks/useListenMessages";

// const Messages = () => {
//     const { messages, loading } = useGetMessages();
//     useListenMessages();
//     const messagesEndRef = useRef(null);

//     // Scroll to the bottom of the messages whenever messages change
//     useEffect(() => {
//         if (messagesEndRef.current) {
//             messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//         }
//     }, [messages]);

//     // Extract messages array from messages object if present
//     const messagesArray = messages?.messages || [];

//     return (
//         <div className='px-4 flex-1 overflow-auto'>
//             {!loading && messagesArray.length > 0 && (
//                 <div>
//                     {messagesArray.map((message) => (
//                         <Message key={message._id} message={message} />
//                     ))}
//                     <div ref={messagesEndRef}></div>
//                 </div>
//             )}

//             {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

//             {!loading && messagesArray.length === 0 && (
//                 <p className='text-center text-yellow-500'>Send a message to start the conversation</p>
//             )}
//         </div>
//     );
// };

// export default Messages;

import { useEffect, useRef, useState } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import { useNewMsgContext } from "../../context/NewMsgContext";
import { useSocketContext } from "../../hooks/useSocketContext";
import { useAuthContext } from "../../context/AuthContext";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const messagesEndRef = useRef(null);
    const [messagesArray, setMessagesArray] = useState([]);
    const {newMessage, setNewMessage} = useNewMsgContext();
    const { socket } = useSocketContext();
    const {authUser} = useAuthContext();

    // Update messagesArray whenever messages change
    useEffect(() => {
        if (messages && Array.isArray(messages.messages)) {
            setMessagesArray(messages.messages);
        } else {
            setMessagesArray([]);
        }
    }, [messages]);

    // Scroll to the bottom of the messages whenever messagesArray changes
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messagesArray]);

    useEffect(() => {
        if(newMessage){
            messagesArray.push(newMessage);
            setMessagesArray(messagesArray);
            setNewMessage(null);
        }
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [newMessage]);
    //****** */
    useEffect(() => {
        socket.on("getMessage", (message) => {
            console.log(message);
            if(authUser.user._id === message.receiverId){
                messagesArray.push(message);
                setMessagesArray(messagesArray);
            }
        });

        return () => {
            console.log("get");
            socket.off("getMessages");
        }
    }, [socket]);
    //****** */
    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading && messagesArray.length > 0 && (
                <div>
                    {messagesArray.map((message) => (
                        <Message key={message._id} message={message} />
                    ))}
                    <div ref={messagesEndRef}></div>
                </div>
            )}

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messagesArray.length === 0 && (
                <p className='text-center text-yellow-500'>Send a message to start the conversation</p>
            )}
        </div>
    );
};

export default Messages;
