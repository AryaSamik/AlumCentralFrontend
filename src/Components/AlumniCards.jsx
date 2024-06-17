import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlumniCards = () => {
    const [alumni, setAlumni] = useState([]);
    const [filteredAlumni, setFilteredAlumni] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchGraduationYear, setSearchGraduationYear] = useState('');
    const [searchBranch, setSearchBranch] = useState('');

    useEffect(() => {
        const fetchAlumni = async () => {
            try {
                const response = await axios.get('https://alumcentralbackend-1.onrender.com/alumni/all'); // Adjust the URL based on your backend setup
                setAlumni(response.data);
                setFilteredAlumni(response.data);
            } catch (error) {
                console.error('Error fetching alumni data:', error);
            }
        };

        fetchAlumni();
    }, []);

    useEffect(() => {
        const filtered = alumni.filter(person => {
            return (
                (searchName === '' || person.name.toLowerCase().includes(searchName.toLowerCase())) &&
                (searchGraduationYear === '' || person.graduationYear === parseInt(searchGraduationYear)) &&
                (searchBranch === '' || person.branch.toLowerCase().includes(searchBranch.toLowerCase()))
            );
        });
        setFilteredAlumni(filtered);
    }, [searchName, searchGraduationYear, searchBranch, alumni]);

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="border p-2 m-2"
                />
                <input
                    type="text"
                    placeholder="Search by year of graduation"
                    value={searchGraduationYear}
                    onChange={(e) => setSearchGraduationYear(e.target.value)}
                    className="border p-2 m-2"
                />
                <input
                    type="text"
                    placeholder="Search by branch"
                    value={searchBranch}
                    onChange={(e) => setSearchBranch(e.target.value)}
                    className="border p-2 m-2"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  border-black lg:grid-cols-3 gap-6">
                {filteredAlumni.map((person, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md  border-2 border-black rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-auto object-cover rounded-t-lg"
                            style={{ maxHeight: '500px' }} // Set a max height to limit excessive stretching
                        />
                        <div className="p-4">
                            <h5 className="text-xl font-bold">{person.name}</h5>
                            {person.designation && person.company && (
                                <>
                                    <p className="text-gray-700">{person.designation} at {person.company}</p>
                                    <p className="text-gray-700">{person.branch}</p>
                                    <p className="text-gray-700 text-sm">Admission Year: {person.admissionYear}</p>
                                    <p className="text-gray-700 text-sm">Graduation Year: {person.graduationYear}</p>
                                    <p className="text-gray-600">{person.tools}</p>
                                </>
                            )}
                            {!person.designation && !person.company && (
                                <>
                                    <p className="text-gray-700">{person.branch}</p>
                                    <p className="text-gray-700 text-sm">Admission Year: {person.admissionYear}</p>
                                    <p className="text-gray-700 text-sm">Graduation Year: {person.graduationYear}</p>
                                    <p className="text-gray-600">{person.tools}</p>
                                </>
                            )}
                            <p className="text-gray-600">{person.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlumniCards;
