import { useEffect } from "react";
import GetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";
import {  useDispatch, useSelector } from 'react-redux';

const Conversations = () => {
	const dispatch=useDispatch();
	const { loading, conversations } = useSelector(state => state.conversations);
	useEffect(()=>{
		if(conversations.length===0)
	  dispatch(GetConversations());
	}
	,[dispatch])
	console.log(conversations)
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Conversations;

