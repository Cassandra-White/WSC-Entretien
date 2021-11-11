import React from "react";
import ListCrew from "../components/ListCrew";
import PostCrew from "../components/PostCrew";

import Grid from "@material-ui/core/Grid";

export default function Homescreen(props) {

  return (
    <>
      <Grid
        container
        item
        xs={12}
        justifyContent="flex-start"
        style={{
          marginBottom: "3rem",
          marginTop: "5rem",
          borderBottom: "1px",
          borderColor: "black",
        }}
      >
        <PostCrew />
        <ListCrew />
      </Grid>
    </>
  );
}
