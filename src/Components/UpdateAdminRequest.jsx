import axios from "axios";
import React, { useEffect, useState } from "react";

function UpdateAdminRequest() {
    const [unverifiedAdmin, setUnverifiedAdmin] = useState([]);

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await axios.get("http://localhost:3000/admin/all");
                const unUpdatedAdmins = response.data.filter(admin => !admin.verified);
                setUnverifiedAdmin(unUpdatedAdmins);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAdmins();
    }, []); // Empty dependency array ensures this runs only once on mount

    const handleSave = async (adminId) => {
        try {
            await axios.post(`http://localhost:3000/admin/verify/${adminId}`);
            setUnverifiedAdmin(prevAdmins => 
                prevAdmins.filter(admin => admin._id !== adminId)
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (adminId) => {
        try {
            await axios.delete(`http://localhost:3000/admin/delete/${adminId}`);
            setUnverifiedAdmin(prevAdmins => 
                prevAdmins.filter(admin => admin._id !== adminId)
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl mb-4">Admin Requests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {unverifiedAdmin.length === 0 ? (
                    <p className="text-lg text-gray-600">No pending admin requests.</p>
                ) : (
                    unverifiedAdmin.map(admin => (
                        <div
                            key={admin._id}
                            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={admin.image} // Cloudinary URL or other image source
                                alt={admin.name}
                                className="w-full h-auto object-cover rounded-t-lg"
                                style={{ maxHeight: '300px' }} // Set max height to prevent excessive stretching
                            />
                            <div className="p-4">
                                <h5 className="text-xl font-bold">{admin.name}</h5>
                                <p className="text-gray-700">{admin.email}</p>
                                <div className="flex justify-between mt-4">
                                    <button 
                                        onClick={() => handleSave(admin._id)} 
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                    >
                                        Save
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(admin._id)} 
                                        className="px-4 py-2 bg-red-500 text-white rounded-md"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default UpdateAdminRequest;
