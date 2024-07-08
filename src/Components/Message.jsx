import MessageContainer from "../Components/messages/MessageContainer";
import Sidebar from "../Components/sidebar/Sidebar";
import React from "react";

const Message = () => {
    return (
        <div
            className='flex h-screen rounded '
            style={{
				borderColor:"black",
                 border:"100px",
                background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/bg.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Sidebar */}
            <div className="w-1/4 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <Sidebar />
            </div>

            {/* Message Container */}
            <div className=" flex items-start justify-center w-3/4 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <MessageContainer />
            </div>
        </div>
    );
};

export default Message;
