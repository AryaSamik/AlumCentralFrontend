import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Foot from "./Foot";
import axios from "axios";
import { useAuthAdminContext } from "../context/AuthAdminContext";

function Login() {

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [passwordType, setPasswordType] = useState("password");

  const { setAuthAdmin } = useAuthAdminContext();

  const [inputdata, setInputData] = useState({
    email:'',
    password:'',
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevInput) => ({
      ...prevInput,
      [name]: value, 
    }));
  }

  const toggleEye = () => {
    setPasswordType((prevType) => prevType === "password" ? "text" : "password" );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post('https://alumcentralbackend-1.onrender.com/admin/login', inputdata);
      localStorage.setItem('admin', JSON.stringify(response.data.admin));
      setAuthAdmin(response.data.admin);
      alert('Login successful!');
      setIsSubmitting(false);
      navigate('/Dashboard');
    } catch (error) {
      setIsSubmitting(false);
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
};

  return (
    <>
      <Navbar />
      <div  className="h-screen flex  flex-wrap justify-center items-center" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/bit_right_pov.jpeg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
      {/* <div className="flex flex-col lg:grid lg:grid-cols-12"> */}
        {/* <div className="lg:col-span-6 p-2 flex justify-center items-center bg-gray-100 h-auto lg:h-screen"> */}
          {/* <div className="flex flex-col justify-center items-center w-full"> */}
            {/* <img src="/bit_right_pov.jpeg" alt="img" className="w-full h-auto mb-4 lg:mb-0" /> */}
          {/* </div> */}
        {/* </div> */}
        <div className="lg:col-span-6 flex justify-center items-center mb-7 lg:mb-1">
          <div className="login-form p-8 w-full max-w-md rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
            <h1 className="text-3xl font-semibold text-center text-gray-300" id="admin">Admin Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-box mb-4">
                <label className="block text-gray-700 mb-2">Email Id</label>
                <input
                  type="email"
                  name="email"
                  value={inputdata.email}
                  onChange={inputChange}
                  placeholder="Enter your Email"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="input-box mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <div className="input-item w-full flex items-center border border-gray-300 rounded">
                  <input
                    type={passwordType}
                    name="password"
                    value={inputdata.password}
                    onChange={inputChange}
                    placeholder="Enter Your Password"
                    className="w-full p-2"
                    required
                    />
                  <span className="p-2 cursor-pointer" onClick={toggleEye}>
                    {passwordType === "text" ? (
                      <AiFillEye color={"#a7a7a7"} size={"20px"} />
                    ) : (
                      <AiFillEyeInvisible color={"#a7a7a7"} size={"20px"} />
                    )}
                  </span>
                </div>
              </div>
              <Link to='/AdminRegister' className="hover:underline" id='register'>Don't have an Admin account?</Link>
              {/* <br/> */}
              <button
           disabled={isSubmitting}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
           {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
            </form>
            <div>
              {/* <button className="w-full mt-3 py-1 text-center text-white bg-blue-500"> */}
              {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
      <Foot />
    </>
  );
}

export default Login;
