// src/App.js
import React from 'react';
import AlumniCards from './AlumniCards';
import { HiArrowLeft } from "react-icons/hi2";
import { useNavigate} from "react-router-dom"

const AlumniList = () => {
    const navigate = useNavigate();
    return (
        <div className="StudentList bg-gray-900">
            <div className='fixed h-20 w-full z-10 bg-purple-800'>
                <span className='text-white text-3xl absolute px-5 py-4'>
                    <button onClick={() => {navigate(-1)}}><HiArrowLeft/></button>
                </span>
                <h1 className=" text-white text-center my-4 text-2xl font-bold">Alumni Directory</h1>
            </div>
            <AlumniCards />
        </div>
    );
};

export default AlumniList;
