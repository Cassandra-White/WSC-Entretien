import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCrews } from "../actions/crewActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text_titre: {
    justifyContent: "center",
  },
  text_title: {
    justifyContent: "center",
    fontWeight: "bold",
  },
}));

export default function Usersprofilscreen() {
  const classes = useStyles();

  const crewList = useSelector((state) => state.crewList);
  const { loading, error, crews } = crewList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCrews());
  }, [dispatch]);

  return (
    <>
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        style={{ marginBottom: "3rem", marginTop: "10rem" }}
      >
        <Typography component="h2" variant="h2" className={classes.text_title}>
          Membres de l'équipage
        </Typography>
      </Grid>
      <Grid container item xs={12} justifyContent="flex-start" style={{ marginBottom: "10rem" }}>
        {loading ? (
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            style={{ marginTop: "5rem" }}
          >
            <LoadingBox></LoadingBox>
          </Grid>
        ) : error ? (
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            style={{ marginTop: "5rem" }}
          >
            <MessageBox variant="danger">{error}</MessageBox>
          </Grid>
        ) : (
          <>
            {crews.map((staff) => (
              <Grid
                key={staff._id}
                container
                item
                xs={4}
                justifyContent="center"
                
              >
                <Typography
                  component="h1"
                  variant="h3"
                  className={classes.text_titre}
                  style={{ color: "black", margin:"1rem" }}
                >
                  {staff.name}
                </Typography>
                {console.log(staff.name)}
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
}
