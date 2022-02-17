import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get('username'),
      password: data.get('password'),
    }
    if(actualData.password.length< 4){
        setError({ status: true, msg: "password must be more than 4 characters", type: 'error' })
    }
    else if(actualData.password.length>10){
         setError({ status: true, msg: "password must be more than 4 characters", type: 'error' })
    
    }
   else  if (actualData.username && actualData.password) {
      console.log(actualData);

      document.getElementById('login-form').reset()
      setError({ status: true, msg: "Login Success", type: 'success' })
      navigate('/dashboard')
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='username' name='username' label='User Name' type='text' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
      </Box>
     
      {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
    </Box>
  </>;
};

export default UserLogin;
