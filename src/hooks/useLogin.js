import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (email, password) => {
    const success = handleInputErrors(email, password);
    if (!success) return;
    axios.defaults.withCredentials = true;
    setLoading(true);
    try {
      const res = await axios.post("https://alumcentralbackend-1.onrender.com/alumni/login", {
        email,
        password,
      });
      const data = res.data;
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      alert(data.message)
    } catch (error) {
      alert(error.message);
      // toast.error(error.message);
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
