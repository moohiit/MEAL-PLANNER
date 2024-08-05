import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-gray-400">Profile</Link>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
