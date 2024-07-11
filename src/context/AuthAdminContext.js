import { createContext, useContext, useState } from "react";

export const AuthAdminContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthAdminContext = () => {
	return useContext(AuthAdminContext);
};

export const AuthAdminContextProvider = ({ children }) => {
	const [authAdmin, setAuthAdmin] = useState(JSON.parse(localStorage.getItem("admin")) || null);

	return <AuthAdminContext.Provider value={{ authAdmin, setAuthAdmin }}>{children}</AuthAdminContext.Provider>;
};