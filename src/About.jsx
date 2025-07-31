import React from 'react'
import { useEffect, useState } from 'react'

const About = () => {
    const [users, setUser] = useState(null);
    const [loading, setLoading] = useState(true);  // Add loading state
    const [error, setError] = useState(null);      // Add error state

    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setLoading(false);    // Stop loading
            })
            .catch(error => {         // Handle errors
                setError(error.message);
                setLoading(false);
            });
    }, [])

    // Handle loading state
    if (loading) return <p>Loading Data...</p>;
    
    // Handle error state
    if (error) return <p>Error: {error}</p>;
    
    // Handle case where no users
    if (!users || users.length === 0) return <p>No users found</p>;

    return (
        <div>
            <h1>Working on useEffect Hook</h1>
            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.name.firstname} {user.name.lastname}</h3>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default About
