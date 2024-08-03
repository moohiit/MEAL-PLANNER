import React, { useState } from 'react';
import LoginModal from '../components/Auth/LoginModal';
import { Button } from '@mui/material';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <h1>Welcome to the Meal Planner and Recipe Manager</h1>
      <Button variant="contained" color="primary" onClick={openModal}>
        Open Login Modal
      </Button>
      <LoginModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Home;
