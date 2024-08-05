import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import { authState } from '../state/authState';
import { TextField, Button, Typography, Grid } from '@mui/material';



const Login = () => {
  const { register, handleSubmit } = useForm();
  const [auth, setAuth] = useRecoilState(authState);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', data);
      setAuth({ token: response.data.token,user:response.data.user, authenticated:true });
      localStorage.setItem('token', response.data.token);
      console.log('Token: ', response.data.token)
      console.log(auth.user);
      // Redirect or show success
      navigate('/dashboard')
    } catch (error) {
      // set the error
      setError(error.response.data.message);
      console.log('Login Error: ', error.response.data.message);
    }
  };

  return (
    <div className='mx-auto min-w-64 max-w-md mt-14 p-16 bg-slate-300 rounded-md  backdrop-contrast-100  flex flex-col justify-center items-center'>
      <Typography variant="h3" color={'gray'}>Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form className='flex flex-col flex-grow' onSubmit={handleSubmit(onSubmit)}>
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
        <Button className='text-center self-center' type="submit" variant="contained"  color="primary">
          Login
        </Button>
      </form>
      <Grid>Don't have an account?
        <Button
          component={Link}
          to="/register"
          color="secondary"
          size="large"
        >
          Register
        </Button>
      </Grid>
    </div>
  );
};

export default Login;
