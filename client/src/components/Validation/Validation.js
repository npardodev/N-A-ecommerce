import React from 'react';
import {useState} from 'react';

import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { ValidationStyles } from './ValidationStyles.js'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const useStyle = makeStyles((theme) => ValidationStyles(theme));

const theme = createTheme();

export const ValidationForm = () => {

  const initiFormValues = {
    firstName: "Primer nombre",
    lastName: "Apellido",
    email: "Email",
    password: "Password",
   };
   const initiFormErrors = {};
  const [formValues, setFormvalues] = useState(initiFormValues);
  const [formErrors, setFormErrors] = useState(initiFormErrors);
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (event) => {
    const {name, value } = event.target;
    setFormvalues ({...formValues, [name]: value });
  }

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    //Valido firstName
    if (!values.firstName){
      errors.firstName = "Ingrese su nombre";
    }

    //Valido firstName
    if (!values.lastName){
      errors.lastName = "Ingrese su apellido";
    }

    //Valido email
    if (!values.email){
      errors.email = "Ingrese su Email";
    }
    else if (!regex.test(values.email)) {
      errors.email = "formato de email inválido";
    }

     //Valido password
     if (!values.password){
      errors.password = "Password is required!";
    }
    else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;

  }

  useEffect(()=>{
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const validation = validateForm(formValues);
    setFormErrors(validation);
    setIsSubmit (true);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),

    });
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
          ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )}
                

          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label={formValues.firstName}
                  autoFocus
                  onChange={handleChange}
                />
                <p>{formErrors.firstName}</p>

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label={formValues.lastName}
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
                <p>{formErrors.lastName}</p>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={formValues.email}
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
                <p>{formErrors.email}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={formValues.password}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
                <p>{formErrors.password}</p>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

