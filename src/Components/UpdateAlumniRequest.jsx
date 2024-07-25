import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUnverifiedAlumni, verifyAlumnus, deleteAlumnus } from '../features/updateAlumni/UpdateAlumniSlice'

function UpdateAlumniRequest() {
    const dispatch = useDispatch();
    const unverifiedAlumni = useSelector((state) => state.updatealumni.unverifiedAlumni);
    const status = useSelector((state) => state.updatealumni.status);
    const error = useSelector((state) => state.updatealumni.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUnverifiedAlumni());
        }
    }, [status, dispatch]);

    const handleSave = (alumnusId) => {
        dispatch(verifyAlumnus(alumnusId))
        .then((res) => {
            if(res.payload.message !== undefined){
                alert(res.payload.message);
                return;
            }
            alert("Alumni Saved");
        })
        .catch((error)=>{
            console.log(error);
            alert("Some error occured");
        });
    };

    const handleDelete = (alumnusId) => {
        dispatch(deleteAlumnus(alumnusId));
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl mb-4">Requests</h2>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p className="text-red-500">{error}</p>}
            {unverifiedAlumni.length === 0 ? (
                <p className="text-lg text-gray-600">No pending requests.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {unverifiedAlumni.map((alumnus, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md border-2 border-black rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={alumnus.image}
                                alt={alumnus.name}
                                className="w-full h-auto object-cover rounded-t-lg"
                                style={{ maxHeight: '500px' }} // Set a max height to limit excessive stretching
                            />
                            <div className="p-4">
                                <h5 className="text-xl font-bold">{alumnus.name}</h5>
                                {alumnus.designation && alumnus.company && (
                                    <>
                                        <p className="text-gray-700">{alumnus.designation} at {alumnus.company}</p>
                                        <p className="text-gray-700">{alumnus.branch}</p>
                                        <p className="text-gray-700 text-sm">Admission Year: {alumnus.admissionYear}</p>
                                        <p className="text-gray-700 text-sm">Graduation Year: {alumnus.graduationYear}</p>
                                        <p className="text-gray-600">{alumnus.tools}</p>
                                    </>
                                )}
                                {!alumnus.designation && !alumnus.company && (
                                    <>
                                        <p className="text-gray-700">{alumnus.branch}</p>
                                        <p className="text-gray-700 text-sm">Admission Year: {alumnus.admissionYear}</p>
                                        <p className="text-gray-700 text-sm">Graduation Year: {alumnus.graduationYear}</p>
                                        <p className="text-gray-600">{alumnus.tools}</p>
                                    </>
                                )}
                                <p className="text-gray-600">{alumnus.message}</p>
                                <div className="flex justify-between mt-4">
                                    <button 
                                        onClick={() => handleSave(alumnus._id)} 
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                    >
                                        Save
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(alumnus._id)} 
                                        className="px-4 py-2 bg-red-500 text-white rounded-md"
                                    >
                                        Delete
                                    </button>
                                </div>
                                <div>
                                    {(alumnus.emailVerificationToken) ? "***Email Not Verified Yet ... Please wait before Saving or Delete on your discretion***" : ""}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UpdateAlumniRequest;
