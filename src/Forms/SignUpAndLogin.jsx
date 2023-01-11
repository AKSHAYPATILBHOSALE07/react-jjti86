import React, { useState } from 'react';
import { FormControl } from '@mui/material';
import { TextField } from '@mui/material';
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { Route, Routes, useNavigate } from 'react-router-dom';



export default function SignUp() {
  const [postId, setPostId] = useState(null);
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const [authMode, setAuthMode] = useState('signin');

  const navigate = useNavigate();
  //useEffect(() => {
  // POST request using fetch inside useEffect React hook
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('111111111111111111');
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
    console.log(authMode);
    console.log(userName + ' ' + password);
    console.log('111111111111111111');
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName: userName, password: password }),
    };
    fetch('http://localhost:8080/api/users/signup', requestOptions)
      .then((response) => response.json())
      .then(
        (data) => console.log(data)
        //setPostId('ID: ' + data.id + ' Username: ' + data.userName)
      );
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
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
      navigate('/data', { replace: true });
  };

  if (authMode === 'signin') {
    return (
      <>
        <div className="card text-center m-3">
          <h5 className="card-header">POST Request with React Hooks</h5>
          <div className="card-body">Returned Data: {postId}</div>

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
                      onChange={(e) => setpassword(e.target.value)}
                      value={password}
                    />
                  </Grid>
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: 'divider',
                      p: 1,
                    }}
                  >
                    <Button
                      variant="contained"
                      value="submit"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Signup
                    </Button>

                    {/* <Button
                      variant="contained"
                      sx={{ ml: 1 }}
                    >
                      Login
                    </Button> */}
                  </Box>
                </FormControl>
              </Grid>
            </Grid>
          </>
        </div>
      </>
    );
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
