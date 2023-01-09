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

    useEffect(() => {
      // POST request using fetch inside useEffect React hook
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userName: userName,
      password: password})
      };
      fetch('http://localhost:8080/api/users/signup', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
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
