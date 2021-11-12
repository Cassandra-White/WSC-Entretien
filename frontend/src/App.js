import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">

        <header>
          <Grid
            container
            item
            
            xs={12}
            justifyContent="center"
            // style={{ marginTop: "4rem" }}
          >
            <Grid
            container
            item
            
            xs={3}
            xm={2}
            justifyContent="flex-end"
            style={{ marginTop: "4rem" }}
            spacing={0}
          >
            
            <img
                src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
                alt="Wild Code School logo"
                style={{ height: "5rem", marginTop:"1rem", marginRight:"3rem"}}
              />
            </Grid>
            <Grid
            container
            item
            
            xs={6}
            sm={6}
            justifyContent="flex-start"
            style={{ marginTop: "4rem" }}
            spacing={0}
          >
              <Typography
                component="h1"
                variant="h2"
                style={{ color: "white", fontWeight: "bolder", marginTop:"1.5rem" }}
              >
                Les Argonautes
              </Typography>
            </Grid>
          </Grid>
        </header>

        <main>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        
        <footer>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            style={{ marginTop: "4rem" }}
          >
            <Typography
              component="h5"
              variant="h5"
              style={{ color: "white", fontWeight: "bolder" }}
            >
              Réalisé pour Jason en Anthestérion de l'an 515 avant JC avec
              &#128150; par Alex{" "}
            </Typography>
          </Grid>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
