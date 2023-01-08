import React from 'react';
import './style.css';
import { FormControl } from '@mui/material';
import { InputLabel, Input, FormHelperText, TextField } from '@mui/material';
import { Button, Grid } from '@mui/material';

export default function SignUpForm() {
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
              />
            </Grid>
            <Grid item sx={{ p: 1 }}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid item sx={{ p: 1 }}>
              <Button variant="contained">Signup</Button>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
