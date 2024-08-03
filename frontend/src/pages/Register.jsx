import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/users/register', data);
      // Redirect or show success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
