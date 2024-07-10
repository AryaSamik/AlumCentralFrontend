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

            // Remove JWT from cookies
            document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";

            localStorage.removeItem("chat-user");
            setAuthUser(null);
            alert(res.data.message);
        } catch (error) {
            console.error("Logout error:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};

export default useLogout;
