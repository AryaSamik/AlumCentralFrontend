import React, { useState } from "react";
import Navbar from "./Navbar";
import img from '../images/bg_pic1.jpg';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Foot from "./Foot";

function AdminRegister() {
    const [inputData, setInputData] = useState({
        name: '',
        image: null,
        email: '',
        password: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordType, setPasswordType] = useState("password");

    const toggleEye = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    }

    const inputChange = (e) => {
        const { name, value, files } = e.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('name', inputData.name);
            formData.append('email', inputData.email);
            formData.append('password', inputData.password);
            formData.append('image', inputData.image); // Append image file
            
            const response = await fetch('http://localhost:3000/admin/register', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            if (response.ok) {
                setIsSubmitting(false);
                alert('Registration successful!');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            setIsSubmitting(false);
            console.error('Error during registration:', error);
            alert('Registration failed');
        }
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen  bg-gray-100">
                <div className=" p-4 lg:p-0 flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 lg:h-screen bg-gray-400 flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center w-full">
                            <img src={img} alt="Background" className="w-full h-auto mb-4 lg:mb-0" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <div className="login-form p-8 bg-white w-full max-w-md shadow-lg rounded-lg">
                            <h1 className="text-2xl text-blue-500 mb-6 font-bold text-center">Admin Registration</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-l font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={inputData.name}
                                        onChange={inputChange}
                                        className="mt-1 block w-full h-9 border-[3px] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="image" className="block  text-l font-medium text-gray-700">Image</label>
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        onChange={inputChange} // Capture file change
                                        className="mt-1 block w-full border-gray-300 h-9 border-[3px] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-l font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={inputData.email}
                                        onChange={inputChange}
                                        className="mt-1 block w-full border-gray-300 h-9 border-[3px] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-l font-medium text-gray-700">Password</label>
                                    <div className="relative">
                                        <input
                                            type={passwordType}
                                            id="password"
                                            name="password"
                                            value={inputData.password}
                                            onChange={inputChange}
                                            className="mt-1 block w-full border-gray-300  h-9 border-[3px] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                                            required
                                        />
                                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                            <button type="button" onClick={toggleEye} className="text-gray-400 hover:text-gray-700 focus:outline-none">
                                                {passwordType === "password" ? (
                                                    <AiFillEyeInvisible className="h-5 w-5" />
                                                ) : (
                                                    <AiFillEye className="h-5 w-5" />
                                                )}
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <button
           disabled={isSubmitting}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
           {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Foot />
        </>
    );
}

export default AdminRegister;
