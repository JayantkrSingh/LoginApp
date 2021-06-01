import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [password, setpassword] = useState();
  const [message, setMessage] = useState();

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [data] = useState(JSON.parse(localStorage.getItem("usersInfo")) || []);

  const onHandleChange = (event) => {
    setPasswordError(false);
    setPasswordError(false);
    setMessage();
    let val = event.target.value;
    if (event.target.name === "username") {
      if (val) {
        setUsername(val);
      } else {
        setUsernameError(true)
      }
    }

    if (event.target.name === "password") {
      if (val) {
        setpassword(val)
      } else {
        setPasswordError(true)
      }
    }
  }

  var CryptoJS = require("crypto-js");
  const onLoginClick = () => {
    let dataInfo = data;
    let userArray = data.map(val => val.username)
    if (!passwordError && !usernameError && password) {
      if (userArray.includes(username)) {
        setMessage("This user already exist in localstorage");
      } else {
        dataInfo.push({ 
          username: username,
          password: CryptoJS.AES.encrypt(JSON.stringify(password), '123').toString()
        })
        localStorage.setItem("usersInfo", JSON.stringify(dataInfo));
        window.location.replace("/dashboard");
      }
    }
  }

  return (
    <Paper>
      <Container fixed maxWidth="sm">
      <Typography component="h5" variant="h4">
        Login
      </Typography>
      <Grid>
        <TextField
          error={usernameError}
          id="filled-error"
          label="Username"
          variant="filled"
          name="username"
          onChange={onHandleChange}
        />
      </Grid>
      <Grid>
        <TextField
          error={passwordError}
          id="filled-error-helper-text"
          name="password"
          label="Password"
          type="Password"
          variant="filled"
          onChange={onHandleChange}
        />
      </Grid>
      <Grid>
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          onClick={onLoginClick}
          className={classes.button}
        >
          Submit
        </Button>
      </Grid>
      {message ?
        <Typography component="h5" variant="h6">
          {message}
        </Typography>
        : null }
      </Container>
    </Paper>
  )
}