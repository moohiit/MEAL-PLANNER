// Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography } from '@mui/material';

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/users/profile');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const onSubmit = async (data) => {
    try {
      await axios.put('/api/users/preferences', data);
      alert('Preferences updated successfully');
    } catch (error) {
      setError('Error updating preferences');
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <Typography variant="h4">Profile</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Dietary Preferences"
          {...register('dietaryPreferences')}
          defaultValue={user.dietaryPreferences.join(', ')}
          fullWidth
        />
        <Button type="submit" variant="contained">Update Preferences</Button>
        {error && <Typography color="error">{error}</Typography>}
      </form>
    </div>
  );
};

export default Profile;
