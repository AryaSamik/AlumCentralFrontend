import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const logout = async () => {
		axios.defaults.withCredentials = true;
		setLoading(true);
		try {
			const res = await axios.post("https://alumcentralbackend-1.onrender.com/alumni/logout");
			console.log(res.data);
			// const data = await res.json();
			// if (data.error) {
			// 	throw new Error(data.error);
			// }

			localStorage.removeItem("chat-user");
			// document.cookie = "jwt"+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
			setAuthUser(null);
			alert(res.data.message);
		} catch (error) {
			alert(error.message);
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
export default useLogout;
