import React from "react";
import MessageContainer from "../Components/messages/MessageContainer";
import Sidebar from "../Components/sidebar/Sidebar";
import './Message.css';

const Message = () => {
    return ( 
        <div  className="h-screen flex  flex-wrap justify-center items-center" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/bg.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        <div
            className='flex flex-1   mx-auto absolute  sm:h-screen  md:w-[1000px] md:h-[600px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'
           
        >
            <Sidebar />
            <MessageContainer /> 
        </div>
        </div>
    );
};

export default Message;
