import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Grid } from '@mui/material';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/users/register', data);
      console.log('User registered successfully');
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      setError(error.response.data.message);
      console.log('Register Error: ', error.response.data.message);
    }
  };

  return (
    <div className='mx-auto min-w-64 max-w-md mt-14 p-16 bg-slate-300 rounded-md  backdrop-contrast-100  flex flex-col justify-center items-center'>
      <Typography variant="h4" color="grey">Register</Typography>
      <form className='flex flex-col flex-grow' onSubmit={handleSubmit(onSubmit)}>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          label="Name"
          {...register('name', { required: true })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          {...register('email', { required: true })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          {...register('password', { required: true })}
          fullWidth
          margin="normal"
        />
        <Button className='text-center self-center' type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
      <Grid>Already have an account?
        <Button
          component={Link}
          to="/login"
          color="secondary"
          size="large"
        >
          Login
        </Button>
      </Grid>
    </div>
  );
};

export default Register;
