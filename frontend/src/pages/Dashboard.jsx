import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const token = localStorage.getItem('token');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data based on the token
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [token]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Render other user details */}
    </div>
  );
};




function Dashboard() {
  //get the Token
  const token = localStorage.getItem('token');
  console.log(token);
  return (
    <>
      <div className='font-semibold text-lg text-center'>
        <h1>Dashboard Page</h1>
        <p>Jwt token: {token}</p>
        <UserProfile />
      </div>
    </>
  )
}

export default Dashboard
