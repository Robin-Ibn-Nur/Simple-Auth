import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className='bg-white p-4 rounded shadow-md'>
            <h1 className='text-xl font-bold'>{user?.username}</h1>
            <p className='text-gray-600'>{user?.email}</p>
        </div>
    );
};

export default UserCard;