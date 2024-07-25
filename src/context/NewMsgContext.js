import { createContext, useContext, useState } from "react";

export const NewMsgContext = createContext();

export const useNewMsgContext = () => {
    return useContext(NewMsgContext);
};

export const NewMsgContextProvider = ({ children }) => {
    const [newMessage, setNewMessage] = useState(null);
    console.log(newMessage);
    return (
        <NewMsgContext.Provider value={{ newMessage, setNewMessage }}>
            {children}
        </NewMsgContext.Provider>
    );
};
