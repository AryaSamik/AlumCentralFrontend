// import { create } from "zustand";

// const useConversation = create((set) => ({
// 	selectedConversation: null,
// 	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
// 	messages: [],
// 	setMessages: (messages) => {
// 		console.log("Messages updated in Zustand store:", messages); // Debugging
// 		set({ messages })
// 	},
// }));

// export default useConversation;
import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => {
		console.log("Messages updated in Zustand store:", messages); // Debugging
		set({ messages });
	},
	select: false,
	setSelect: (select) => set({ select }),
}));

export default useConversation;
