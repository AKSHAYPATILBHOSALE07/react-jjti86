import React from 'react';
import React, { useState, useEffect } from 'react';
import { FormControl } from '@mui/material';
import { InputLabel, Input, FormHelperText, TextField } from '@mui/material';
import { Button, Grid } from '@mui/material';

export default function Login() {
  const [postId, setPostId] = useState(null);
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmitLogin = () => {
    console.log(userName + ' ' + password);
    console.log('111111111111111111');
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName: userName, password: password }),
    };
    fetch('http://localhost:8080/api/users/login', requestOptions)
      .then((response) => response.json())
      .then(
        (data) => console.log(data)
        //setPostId('ID: ' + data.id + ' Username: ' + data.userName)
      );
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
            <h2>Login Form</h2>
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
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
            </Grid>
            <Grid item sx={{ p: 1 }}>
              <Button
                variant="contained"
                value="submit"
                type="submit"
                onClick={handleSubmitLogin}
              >
                Log In
              </Button>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
