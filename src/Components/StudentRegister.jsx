import React, { useState } from "react";
import Foot from './Foot'
import Navbar from "./Navbar";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";


function StudentRegister() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordType, setPasswordType] = useState("password");

    const toggleEye = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    }
    const [formData, setFormData] = useState({
        name: '',
        image: null,
        email: '',
        password: '',
        branch: '',
        bitRollno: '',
        admissionYear: '',
        graduationYear: '',
        tools: '',
        company: '',
        designation: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        // axios.defaults.withCredentials = true;
        e.preventDefault();
        setIsSubmitting(true);
        const { name, image, email, password, branch, bitRollno, admissionYear, graduationYear, tools, company, designation, message } = formData;

        const formDataToSend = new FormData();

        formDataToSend.append('name', name);
        formDataToSend.append('image', image);
        formDataToSend.append('email', email);
        formDataToSend.append('password', password);
        formDataToSend.append('branch', branch);
        formDataToSend.append('bitRollno', bitRollno);
        formDataToSend.append('admissionYear', admissionYear);
        formDataToSend.append('graduationYear', graduationYear);
        formDataToSend.append('tools', tools);
        formDataToSend.append('company', company);
        formDataToSend.append('designation', designation);
        formDataToSend.append('message', message);

        try {
            const response = await fetch('https://alumcentralbackend-1.onrender.com/alumni/register', {
                method: 'POST',
                body: formDataToSend,
                credentials: 'include'
            });

            if (!response.ok) {
                setIsSubmitting(false);
                throw new Error('Registration failed');
            }
            setIsSubmitting(false);
            // const result = await response.json();
            console.log('Registration successful:', response.data);
            alert('Verification Email sent!');
            // You can redirect or perform any other action upon successful registration
        } catch (error) {
            setIsSubmitting(false);
            console.log(error);
            console.error('Registration error:', error.message);
            (error.response && error.response.data && error.response.data.message) ? alert('Error: '+ error.response.data.message) : alert(error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/bit_right_pov.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
            <main className="flex flex-col items-center py-10 shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10" style={{height:'100vh', overflowY:'auto'}}>
                <div className="w-3/4 flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg">
                    <div>
                        <h1 className="text-2xl font-bold text-center py-3 text-gray-500">Registration Form</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full max-w-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
                        <h2 className="text-xl text-black font-semibold mb-4">General Info</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                Image
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="image"
                                type="file"
                                name="image"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type={passwordType}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                />
                <span className="absolute pt-5 inset-y-0 right-0 pr-3 flex items-center">
                    <button type="button" onClick={toggleEye} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                        {passwordType === "password" ? (
                            <AiFillEyeInvisible className="h-5 w-5" />
                        ) : (
                            <AiFillEye className="h-5 w-5" />
                        )}
                    </button>
                </span>
            </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
                                Branch
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="branch"
                                type="text"
                                name="branch"
                                value={formData.branch}
                                onChange={handleChange}
                                placeholder="Enter your branch"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bitRollno">
                                BitRollno
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="bitRollno"
                                type="text"
                                name="bitRollno"
                                value={formData.bitRollno}
                                onChange={handleChange}
                                placeholder="Enter your BitRollno"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admissionYear">
                                Year of Admission
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="admissionYear"
                                type="number"
                                name="admissionYear"
                                value={formData.admissionYear}
                                onChange={handleChange}
                                placeholder="Enter your year of admission"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="graduationYear">
                                Year of Graduation
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="graduationYear"
                                type="number"
                                name="graduationYear"
                                value={formData.graduationYear}
                                onChange={handleChange}
                                placeholder="Enter your year of graduation"
                                required
                            />
                        </div>
                        <h2 className="text-xl text-gray-800 font-semibold mb-4">Additional Info</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tools">
                                Tools Learned
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="tools"
                                type="text"
                                name="tools"
                                value={formData.tools}
                                onChange={handleChange}
                                placeholder="Enter tools you have learned"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                                Company (if working)
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="company"
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Enter your company name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation">
                                Designation (if working)
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="designation"
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                placeholder="Enter your designation"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter any message you want to share"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                                >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
            <Foot />
        </>
    );
}

export default StudentRegister;
