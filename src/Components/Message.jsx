
import React from "react";
import MessageContainer from "../Components/messages/MessageContainer";
import Sidebar from "../Components/sidebar/Sidebar";
import './Message.css';
import useConversation from "../zustand/useConversation";

const Message = () => {
	const { select, setSelect } = useConversation();

	const handleBackClick = () => {
		setSelect(false);
	};

	return (
		<div className="h-screen flex flex-wrap justify-center items-center" style={{
			background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/bit_right_pov.jpeg')`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		}}>
			<div className='flex flex-1 h-full mx-auto absolute sm:h-screen md:w-[1000px] md:h-[600px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<div className={`w-full h-full ${select ? "hidden sm:flex" : "flex"}`}>
					<Sidebar />
				</div>
				<div className={`w-full h-full ${select ? "flex" : "hidden sm:flex"}`}>
					<MessageContainer />
					{select && (
						<button
							className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg sm:hidden"
							onClick={handleBackClick}
						>
							Back
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Message;