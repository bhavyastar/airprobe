import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Registration = () => {

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
   const initialValues = { username: "", email: "", password: "" };
   const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
     setFormErrors(validate(formValues));
 
  
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
      tc: data.get('tc'),
    }
    if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById('registration-form').reset()
        setError({ status: true, msg: "Registration Successful", type: 'success' })
        navigate('/dashboard')
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
    
  }
 
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
 
    return errors;
  };
  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='name' name='username'   label='Name'  value={formValues.username}
              onChange={handleChange}/>
              
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' value={formValues.email}
              onChange={handleChange}  />
               <p>{formErrors.email}</p>
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' value={formValues.password}
              onChange={handleChange} />
               <p>{formErrors.password}</p>
      <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' value={formValues.c_password}
              onChange={handleChange} />
              <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
  </>;
};

export default Registration;
