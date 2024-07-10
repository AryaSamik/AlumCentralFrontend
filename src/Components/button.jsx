import React, { useState } from 'react';
import useAlumConnection from '../hooks/useAlumConnection';

const AlumConnectionButton = ({ person }) => {
    const [triggerConnection, setTriggerConnection] = useState(false);

    useAlumConnection(triggerConnection ? person : null); // Call the hook with person if triggered

    const handleConnection = () => {
        setTriggerConnection(true); // Set the state to trigger the hook logic
    };

    return (
        <button
            className='bg-blue-500 text-white rounded-xl flex justify-center pb-1'
            onClick={handleConnection} // Use the handler function
        >
            Connect
        </button>
    );
};

export default AlumConnectionButton;
