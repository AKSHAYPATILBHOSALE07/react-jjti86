import React from 'react';
import { useState } from 'react';
import { FormControl } from '@mui/material';
import { InputLabel, Input, FormHelperText, TextField } from '@mui/material';
import { Button, Grid } from '@mui/material';

const SignUpForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onUserNameChange = (e) => setUserName(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    console.log(userName);
    console.log(password);
  }

  return (
    <>
      <Grid
        container
        spacing={5}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        alignItems="center"
      >
        <Grid item>
          <FormControl>
            <h2>Signup Form</h2>
            <Grid item sx={{ p: 1 }}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={onUserNameChange}
                value={userName}
              />
            </Grid>
            <Grid item sx={{ p: 1 }}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={onPasswordChange}
                value={password}
              />
            </Grid>
            <Grid item sx={{ p: 1 }}>
              <Button variant="contained" value="submit" type="submit" onClick={handleSubmit}>
                Signup
              </Button>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};
export default SignUpForm;
