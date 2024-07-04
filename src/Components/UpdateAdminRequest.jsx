// src/components/UpdateAdminRequest.jsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUnverifiedAdmins, verifyAdmin, deleteAdmin } from '../features/updateAdmin/updateAdminSlice';

function UpdateAdminRequest() {
    const dispatch = useDispatch();
    const unverifiedAdmin = useSelector((state) => state.updateadmin.unverifiedAdmin);
    const adminStatus = useSelector((state) => state.updateadmin.status);
    const error = useSelector((state) => state.updateadmin.error);

    useEffect(() => {
        if (adminStatus === 'idle') {
            dispatch(fetchUnverifiedAdmins());
        }
    }, [adminStatus, dispatch]);

    const handleSave = (adminId) => {
        dispatch(verifyAdmin(adminId));
    };

    const handleDelete = (adminId) => {
        dispatch(deleteAdmin(adminId));
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl mb-4">Admin Requests</h2>
            {adminStatus === 'loading' && <p>Loading...</p>}
            {adminStatus === 'failed' && <p className="text-red-500">{error}</p>}
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
