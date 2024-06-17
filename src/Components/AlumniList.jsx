// src/App.js
import React from 'react';
import AlumniCards from './AlumniCards';

const AlumniList = () => {
    return (
        <div className="StudentList">
            <h1 className="text-center my-4 text-3xl font-bold">Alumni Directory</h1>
            <AlumniCards />
        </div>
    );
};

export default AlumniList;
