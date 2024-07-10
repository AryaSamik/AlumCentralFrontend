import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const messagesEndRef = useRef(null);

    function isArray(variable) {
        return Array.isArray(variable);
    }

    function isObject(variable) {
        return variable !== null && typeof variable === 'object' && !isArray(variable);
    }

    // Check if messages is an object and has a messages array
    const messagesArray = isObject(messages) && isArray(messages.messages) ? messages.messages : [];

    console.log("Is messages an object?", isObject(messages));
    console.log("Messages value:", messages);
    console.log('Messages Array:', messagesArray);

    // Scroll to the bottom of the messages whenever messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messagesArray]);

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
