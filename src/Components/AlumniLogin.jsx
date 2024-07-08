
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Foot from "./Foot";
import useLogin from "../hooks/useLogin";

const AlumniLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [passwordType,setPasswordType]=useState("password");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    
  };
  const toggleEye = () => {
      setPasswordType((prevType) => prevType === "password" ? "text" : "password" );
      };
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block p-2">
                <span className="text-base">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
            <label className="block p-2">
              <span className="text-base">Password</span>
            </label>
            <input
              type={passwordType}
              name="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-3 top-3/4 transform -translate-y-1/2 p-2 cursor-pointer"
              onClick={toggleEye}
            >
              {passwordType === "text" ? (
                <AiFillEye color={"#a7a7a7"} size={"20px"} />
              ) : (
                <AiFillEyeInvisible color={"#a7a7a7"} size={"20px"} />
              )}
            </span>
      
            </div>
            <Link
              to="/StudentRegister"
              className="text-sm text-blue-600 hover:underline mt-2 inline-block"
            >
              {"Don't"} have an account?
            </Link>
            <div>
              <button
                className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={loading}
              >
                {loading ? <span className="loading loading-spinner"></span> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Foot/>
    </>
  );
};

export default AlumniLogin;
