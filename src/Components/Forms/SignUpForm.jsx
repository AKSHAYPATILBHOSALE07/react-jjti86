import React from 'react';
import { useState } from 'react';
import { FormControl } from '@mui/material';
import { InputLabel, Input, FormHelperText, TextField } from '@mui/material';
import { Button, Grid } from '@mui/material';

const SignUpForm = () => {
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');

  const onUserNameChange = (e) => setuserName(e.target.value);
  const onPasswordChange = (e) => setpassword(e.target.value);

  // const handleSubmit = () => {
  //   console.log("userName: " + userName);
  //   console.log("password: " + password);
  // }

  const handleSubmit = async () => {
    console.warn(userName, password);

    let result = await fetch('http://localhost:8080/api/users/signup', {
      method: 'post',
      body: JSON.stringify({ userName, password }),
      headers: {
        'Contents-Type': 'application/json',
      },
    });
    console.log(userName + ' ' + password);
    result = await result.json();
    console.log('111111111111111111111111111111111');
    console.warn(result);
  };

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
                onChange={(e) => setuserName(e.target.value)}
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
              <Button
                variant="contained"
                value="submit"
                type="submit"
                onClick={handleSubmit}
              >
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
