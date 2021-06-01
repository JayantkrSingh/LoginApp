import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


export default function Dashboard() {
  const history = useHistory();
  const goToLoginPage = () => {
    history.push("/login")
  }

  const removeLocalstorage = () => {
    localStorage.removeItem("usersInfo");
  }

  return (
    <Paper>
      <Container fixed maxWidth="sm">
        <Typography component="h5" variant="h4">
          Data Successfully Save
        </Typography>
        <Grid>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            onClick={removeLocalstorage}
          >
            Remove Localstorage
          </Button>
        </Grid>
        <Grid>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            onClick={goToLoginPage}
          >
            Go To Login
          </Button>
        </Grid>
      </Container>
    </Paper>
  )
}