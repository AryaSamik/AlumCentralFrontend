import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthAdminContext } from "../context/AuthAdminContext";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { authUser, setAuthUser } = useAuthContext();
    const { authAdmin, setAuthAdmin } = useAuthAdminContext();

    const logout = async () => {
        axios.defaults.withCredentials = true;
        setLoading(true);
        try {
            let res = null;
            if(authAdmin){
                res = await axios.post("https://alumcentralbackend-1.onrender.com/admin/logout");
                localStorage.removeItem("admin");
                setAuthAdmin(null);
            }
            else if(authUser){
                res = await axios.post("https://alumcentralbackend-1.onrender.com/alumni/logout");
                localStorage.removeItem("chat-user");
                setAuthUser(null);
            }
            console.log(res.data);

            // // Remove JWT from cookies
            // document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";

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
