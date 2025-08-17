import React, { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

const CommonProfile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-gray-500 text-lg">Loading user data...</p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg mt-6">
            <div className="flex flex-col items-center">
                {/* User Image */}
                <img
                    src={user.photoURL || 'https://via.placeholder.com/150'}
                    alt="User Profile"
                    className="w-32 h-32 rounded-full mb-4 object-cover"
                />

                {/* User Name */}
                <h2 className="text-2xl font-bold mb-2">
                    {user.displayName || 'No Name'}
                </h2>

                {/* User Email */}
                <p className="text-gray-600 mb-1">
                    <strong>Email:</strong> {user.email}
                </p>

                {/* User Role */}
                <p className="text-gray-600 mb-1">
                    <strong>Role:</strong> {user.role || 'Customer'} {/* Optional, if you store role */}
                </p>
            </div>
        </div>
    );
};

export default CommonProfile;
