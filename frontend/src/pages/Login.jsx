import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authState } from '../state/authState';
import { TextField, Button, Typography } from '@mui/material';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [auth, setAuth] = useRecoilState(authState);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', data);
      setAuth({ token: response.data.token });
      // Redirect or show success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
