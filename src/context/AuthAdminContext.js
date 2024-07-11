import { createContext, useContext, useState } from "react";

export const AuthAdminContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthAdminContext = () => {
	return useContext(AuthAdminContext);
};

export const AuthAdminContextProvider = ({ children }) => {
	const [authUser, setAuthAdminUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

	return <AuthAdminContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthAdminContext.Provider>;
};