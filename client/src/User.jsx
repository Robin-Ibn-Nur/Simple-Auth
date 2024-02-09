import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';


const User = () => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/all_user')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])
    return (
        <div className='bg-white p-4'>
            {data?.map((user, index) => (
                <UserCard key={index} user={user} />
            ))}
        </div>
    );
};

export default User;