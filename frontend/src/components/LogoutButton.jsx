import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
      Logout
    </button>
  );
};

export default LogoutButton;
