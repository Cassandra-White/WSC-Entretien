import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCrew } from "../actions/crewActions";
import MessageBox from '../components/MessageBox';
import LoadingBox from "../components/LoadingBox";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
    borderRadius: 0,
  },
  submit: {
    margin: theme.spacing(0, 1, 0),
    height: "100%",
  },
  text_title: {
    justifyContent: "center",
    fontWeight: "bold",
  },
  text_label: {
    justifyContent: "center",
    fontWeight: "bold",
  },
}));

export default function Usersprofilscreen(props) {
  const classes = useStyles();
  const [name, setName] = useState("");

  const crewCreate = useSelector((state) => state.crewCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = crewCreate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      window.location.reload();
    }
  }, [dispatch, successCreate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createCrew({
        name,
      })
    );
  };

  return (
    <>
    
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        className={classes.button_nav}
      >
        <Typography component="h2" variant="h2" className={classes.text_title}>
          Ajouter un(e) Argonaute
        </Typography>
      </Grid>

      <Container component="main" maxWidth="xs">
        <form className={classes.form} onSubmit={submitHandler}>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            style={{ marginBottom: "1.5rem" }}
          >
            <Typography
              component="h3"
              variant="h4"
              className={classes.text_label}
            >
              Nom de l'Argonaute
            </Typography>
          </Grid>
          <Grid container item justifyContent="center">
            <Grid item xs={9}>
              <TextField
                className={classes.text_field}
                // autoComplete="pseudo"
                name="pseudo"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Argonaute"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                style={{color:"black"}}
                className={classes.submit}
              >
                Envoyer
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid
        container
        item
        xs={12}
        justifyContent="center"
        style={{marginTop:"5rem"}}
      >
          {loadingCreate && (
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            style={{ marginTop: "5rem" }}
          >
            <LoadingBox></LoadingBox>
          </Grid>
        )}
        {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      </Grid>
      </Container>
    </>
  );
}
