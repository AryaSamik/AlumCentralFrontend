import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser,authUser } = useAuthContext();

  const login = async (email, password) => {
    const success = handleInputErrors(email, password);
    if (!success) return;
    
    setLoading(true);
    try {
      const res = await axios.post("https://alumcentralbackend-1.onrender.com/alumni/login", {
        email,
        password,
      });
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      const d=localStorage.getItem("chat-user");
      const date = new Date();
      date.setTime(date.getTime() + (10 * 24 * 60 * 60 * 1000));
      let expires = "; expires=" + date.toUTCString();
      document.cookie = "jwt" + "=" + (data.token || "")  + expires + "; path=/";
      setAuthUser(data);
      console.log(d);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors(email, password) {
  if (!email || !password) {
    alert("Please fill in all fields");
    return false;
  }

  return true;
}
